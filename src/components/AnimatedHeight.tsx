import styled from 'styled-components';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const STEP_COUNT = 3;
const STEP_WIDTH = 250; // px

const Viewport = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.3s height;
  width: ${STEP_WIDTH}px;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  transform: translateX(0);
  transition: 0.3s transform;
  width: ${STEP_WIDTH * STEP_COUNT}px;
`;

const Step = styled.div`
  height: fit-content;
  width: ${STEP_WIDTH}px;
`;

interface Props {
  steps: [ReactNode, ReactNode, ReactNode];
  stepIndex: number;
}

export const AnimatedHeight = ({ steps, stepIndex }: Props) => {
  const stepEls = useRef<Array<HTMLDivElement | null>>([]);

  // Hack: Force a rerender to ensure size gets set correctly on mount
  const [v, setV] = useState(0);
  useEffect(() => {
    setV(1);
  });

  return (
    <Viewport
      style={{
        height: stepEls.current[stepIndex]?.offsetHeight ?? 'fit-content',
      }}
    >
      <Slider
        style={{
          transform: `translateX(-${(100 / STEP_COUNT) * stepIndex}%)`,
        }}
      >
        {steps.map((step, index) => (
          <Step key={index} ref={(el) => (stepEls.current[index] = el)}>
            {step}
          </Step>
        ))}
      </Slider>
    </Viewport>
  );
};
