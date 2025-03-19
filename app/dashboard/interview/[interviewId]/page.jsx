"use client"
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Webcam from "react-webcam";
import Link from 'next/link'


function Interview({ params: paramsPromise }) {
  const params = React.use(paramsPromise);

  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  useEffect(() => {
    console.log(params.interviewId)
    GetInterviewDetails();
  },)

  /* Used to Get Interview details by mock nterview id*/

  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId))


    setInterviewData(result[0]);
  }
  return (
    <div className='my-10'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

        <div className='flex flex-col my-5 gap-5 '>
          {interviewData ? (
            <>
              <div className='flex flex-col p-5 rounded-lg border gap-5'>
                <h2 className='text-lg'>
                  <strong>Health Problem:</strong> {interviewData.jobPosition}
                </h2>
                <h2 className='text-lg'>
                  <strong>A short Description:</strong> {interviewData.jobDesc}
                </h2>
                <h2 className='text-lg'>
                  <strong>Number of days suffering it from:</strong> {interviewData.jobExperience}
                </h2>
              </div>
              <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                <h2 className='flex gap-2 items-center text-yellow-500'> <Lightbulb /><strong>Information</strong></h2>
                <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
              </div>
            </>

          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div>
          {webCamEnabled ? < Webcam
            onUserMedia={() => setWebCamEnabled(true)}
            onUserMediaError={() => setWebCamEnabled(false)}
            mirrored={true}
            style={{
              height: 300,
              width: 300
            }} />
            : <>
              <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border' />
              <Button variant="ghost" className="w-full" onClick={() => setWebCamEnabled(true)}>Enable WebCam for Doctor's consultation</Button>
            </>
          }
        </div>
      </div>
      <div className='flex justify-end items-end'>
        
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
        <Button>Start</Button>
        </Link>

      </div>


    </div>
  )
}

export default Interview