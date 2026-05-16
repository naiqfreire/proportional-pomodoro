import { useState, useEffect } from 'react';

export const useTimer = () => {
    const [mode, setMode] = useState('focus');
    const [isRunning, setIsRunning] = useState(false);
    const [currentRatio, setCurrentRatio] = useState(0.2);
    
    const [currentSeconds, setCurrentSeconds] = useState(0);
    const [sessionFocus, setSessionFocus] = useState(0); 
    const [totalToday, setTotalToday] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                if (mode === 'focus') {
                    setCurrentSeconds((prev) => prev + 1);
                    setSessionFocus((prev) => prev + 1);
                } else if (mode === 'rest') {
                    setCurrentSeconds((prev) => {
                        if (prev <= 1) {
                            setIsRunning(false);
                            return 0;
                        }
                        return prev - 1;
                    });
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning, mode]);

    const toggleTimer = () => setIsRunning(!isRunning);
    
    const switchMode = () => {
        setIsRunning(false);
        
        if (mode === 'focus') {
            setTotalToday((prev) => prev + sessionFocus);
            
            const restTime = Math.floor(sessionFocus * currentRatio);
            setMode('rest');
            setCurrentSeconds(restTime);
        } else {
            setMode('focus');
            setCurrentSeconds(0);
            setSessionFocus(0);
        }
    };

    const resetTimer = () => {
        setIsRunning(false);
        if (mode === 'focus') {
            setCurrentSeconds(0);
            setSessionFocus(0);
        } else {
            const restTime = Math.floor(sessionFocus * currentRatio);
            setCurrentSeconds(restTime);
        }
    };

    const selectRatio = (ratio) => setCurrentRatio(ratio);

    return {
        mode,
        isRunning,
        currentRatio,
        currentSeconds,
        sessionFocus,
        totalToday,
        toggleTimer,
        switchMode,
        resetTimer,
        selectRatio
    };
};