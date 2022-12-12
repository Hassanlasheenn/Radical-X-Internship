import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {

    const [windowDimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight});
    const [Btn, setBtn] = useState(false);

    const detectSize = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimension])
  return (
    <>
      <button onClick={() => setBtn(Btn)}>Celebrate</button>
      {Btn && <ReactConfetti 
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={800}
      />}
    </>
  )
}

export default Confetti;
