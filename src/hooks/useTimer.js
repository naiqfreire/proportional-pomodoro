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
        let lastTick = Date.now();

        if (isRunning) {
            interval = setInterval(() => {
                const now = Date.now();
                const delta = Math.floor((now - lastTick) / 1000);

                if (delta > 0) {
                    if (mode === 'focus') {
                        setCurrentSeconds((prev) => prev + delta);
                        setSessionFocus((prev) => prev + delta);
                    } else if (mode === 'rest') {
                        setCurrentSeconds((prev) => {
                            if (prev - delta <= 0) {
                                setIsRunning(false);
                                return 0;
                            }
                            return prev - delta;
                        });
                    }
                    lastTick += delta * 1000;
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

            setIsRunning(true);
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
        selectRatio,
    };
};
