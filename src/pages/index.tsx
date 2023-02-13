import Head from 'next/head';
import { useState } from 'react';

import { AnimatedHeight } from '@/components/AnimatedHeight';

export default function Home() {
  const [stepIndex, setStepIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <button
          disabled={stepIndex === 0}
          onClick={() => setStepIndex((currentStep) => currentStep - 1)}
        >
          Previous
        </button>{' '}
        <button
          disabled={stepIndex === 2}
          onClick={() => setStepIndex((currentStep) => currentStep + 1)}
        >
          Next
        </button>
        <AnimatedHeight
          steps={[
            <div key="1" style={{ backgroundColor: 'rgba(255,0,0,.2)', height: 100 }}>
              First step
            </div>,
            <div key="2" style={{ backgroundColor: 'rgba(0,255,0,.2)', height: 200 }}>
              This one is taller!
            </div>,
            <div key="3" style={{ backgroundColor: 'rgba(0,0,255,.2)', height: 75 }}>
              Another short one
            </div>,
          ]}
          stepIndex={stepIndex}
        />
      </main>
    </>
  );
}
