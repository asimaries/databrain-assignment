import { ReactElement, useState } from "react";

const useMultiStepOrderForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };
  const prev = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    next,
    prev,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepOrderForm;
