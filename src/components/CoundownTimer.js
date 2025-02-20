import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return null; // O un indicador de carga, si lo prefieres
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {Object.entries(timeLeft).map(([key, value]) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  height: '50px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                  fontSize: '14px',
                }}
              >
                <span style={{ fontSize: '18px', color: 'grey' }}>{value}</span>
                <span style={{ fontSize: '9px', color: 'grey' }}>{key}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>Time's up, Time to Claim Rewards</p>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
