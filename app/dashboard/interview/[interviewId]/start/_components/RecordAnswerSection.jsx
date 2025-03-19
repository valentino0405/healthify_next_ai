"use client"
import React from 'react';
import Image from 'next/image';
import Webcam from 'react-webcam';
import { Button } from '@/components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { useState,useEffect } from 'react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModal';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import moment from 'moment';


function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex,interviewData}) {

    const[userAnswer,setUserAnswer]=useState('');
    const {user}=useUser();
    const [loading,setLoading]=useState(false);

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(()=>{
        results.map((result)=>(
            setUserAnswer(prevAns=>prevAns+result?.transcript)
        ))
    },[results])

    useEffect(()=>{
        if(!isRecording&&userAnswer.length>10)
        {
            UpdateUserAnswer();
        }
        // if(userAnswer?.length<10)
        //     {
        //         setLoading(false);
        //         toast('Error while saving your answer,Please record again')
        //         return;
        //     }
    },[userAnswer])

    const StartStopRecording=async()=>{
        if(isRecording){
               
                stopSpeechToText()
               
               

            }

        else{
            startSpeechToText();
        }
    }

    const UpdateUserAnswer=async()=>{

        console.log(userAnswer);
        setLoading(true);

        const feedbackPrompt = "Possible Cause: " + mockInterviewQuestion[activeQuestionIndex]?.["Possible Cause"] + 
        ", User Response: " + userAnswer + 
        ". Based on this user response (user will tell which among all 5 is the closest possible cause), provide structured feedback with bullet points using '●' for each point. " +
        "Include a  timetable(it should be based on indan standard time) on how to take medicines and precautions. " +
        "Use '●' for bullet points and format the response properly with line breaks (feedback should be of just 20 lines) (no * and **)(only line breaks \n) " +
    
        "Also, replace the rating field with an estimated recovery period in days. " +
        "Return the response in JSON format with two fields: 'feedback' (guidance with bullet points) and 'recovery_period' (estimated days to recover).";
        
        

        const result =await chatSession.sendMessage(feedbackPrompt);
        const mockJsonResp=(result.response.text()).replace('```json', '').replace('```','')
        console.log(mockJsonResp);
        const JsonFeedbackResp=JSON.parse(mockJsonResp);

        const resp=await db.insert(UserAnswer)
        .values({
            mockIdRef:interviewData?.mockId,
            question:mockInterviewQuestion[activeQuestionIndex]?.["Possible Cause"],
            userAns:userAnswer,
            correctAns:mockInterviewQuestion[activeQuestionIndex]?.["Recommended Action"],
            feedback:JsonFeedbackResp?.feedback,
            recovery_period:JsonFeedbackResp?.rating,
            userEmail:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-yyyy')
        })
        if(resp)
        {
            toast('User Answer recorded successfully');
            setUserAnswer('');
            setResults([]);
        }
        setResults([]);
        
        setLoading(false);
    }

    return (
        <div className=' flex items-center justify-start flex-col'>
            <div className='flex flex-col mt-10 justify-center items-center border rounded-lg p-5'>
                <Image src={'/webcam.png'} width={200} height={200}
                    className='absolute' />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: '100%',
                        zIndex: 10,
                    }} />
            </div>
            <Button 
            disabled={loading}
            variant="outline" className="my-10"
            onClick={StartStopRecording}>
                        {isRecording?
                        <h2 className='text-red-600 flex gap-2'>
                            <Mic/> Stop Recording
                        </h2>
                        :
                        'Record Your Insights' }</Button>
                        
              
                       
           

        </div>
    );
}

export default RecordAnswerSection;
