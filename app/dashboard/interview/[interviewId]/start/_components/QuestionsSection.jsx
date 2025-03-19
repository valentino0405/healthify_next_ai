import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {


    const textToSpeech=(text)=>{
        if('speechSynthesis' in window){
            const speech=new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else{
            alert('Sorry ,Your browser does not support text to speech')
        }
    }




    return mockInterviewQuestion && (
        <div className="p-5 my-10 border rounded-lg h-fit">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {mockInterviewQuestion &&
                    mockInterviewQuestion.map((question, index) => (
                        <h2
                            className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer 
                ${activeQuestionIndex === index ? 'bg-[#4845d2] text-white' : 'bg-secondary'}`}
                        >
                            Possible Cause #{index + 1}
                        </h2>
                    ))}

            </div>
            <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.["Possible Cause"]}</h2>
            <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.["Possible Cause"])}/>
            <h2 className='my-5 w-50 flex justify-center text-md md:text-lg border rounded-full  h-10 bg-[#4845d2] text-white text-center'>Recommended Action</h2>
            <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.["Recommended Action"]}</h2>
            <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.["Recommended Action"])}/>

            
            
            
            <div className='border rounded-lg p-5 bg-blue-100 mt-10 '>
                <h2 className='flex gap-2 items-center text-primary'>
                    <Lightbulb />
                    <strong>Note:</strong>
                </h2>
                <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
            </div>


        </div>
    );
}

export default QuestionsSection;
