// components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';

type CountdownTimerProps = {
  initialTime: number; // time in seconds
  onSubmit: () => void; // function to call on auto-submit
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime, onSubmit }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [submissionCountdown, setSubmissionCountdown] = useState<number | null>(null);

  // Main timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setSubmissionCountdown(9); // Start the 10-second submission countdown
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Submission countdown effect
  useEffect(() => {
    if (submissionCountdown === null) return;
    if (submissionCountdown <= 0) {
      onSubmit(); // Trigger auto-submit
      return;
    }

    const submissionTimerId = setInterval(() => {
      setSubmissionCountdown((prevCountdown) => (prevCountdown ?? 0) - 1);
    }, 1000);

    return () => clearInterval(submissionTimerId);
  }, [submissionCountdown, onSubmit]);

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className='text-center'>
      {timeLeft > 0 ? (
        <div className='text-xl font-semibold'>{formatTime(timeLeft)}</div>
      ) : submissionCountdown !== null ? (
        <div className='text-danger-500'>នឹងដាក់បញ្ចូនស្វ័យប្រវត្តិ <span className='font-bold text-xl'>{submissionCountdown}​</span> វិនាទី</div>
      ) : (
        "Time's up!"
      )}
    </div>
  );
};

export default CountdownTimer;
