import Header from './components/Header';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import IntensitySelector from './components/IntensitySelector';
import StatsFooter from './components/StatsFooter';
import { useTimer } from './hooks/useTimer';

function App() {
    const {
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
    } = useTimer();

    return (
        <div className="min-h-screen bg-matte text-gray-100 flex flex-col items-center justify-center font-sans">
            <Header />

            <main className="flex flex-col items-center gap-10 w-full max-w-md px-6">
                <TimerDisplay totalSeconds={currentSeconds} mode={mode} />

                <Controls
                    isRunning={isRunning}
                    mode={mode}
                    onToggleTimer={toggleTimer}
                    onSwitchMode={switchMode}
                    onReset={resetTimer}
                />

                <IntensitySelector
                    currentRatio={currentRatio}
                    mode={mode}
                    onSelectRatio={selectRatio} // <-- Passando a função real do hook
                />
            </main>

            <div className="mt-16 w-full max-w-md px-6">
                <StatsFooter
                    currentSessionFocus={sessionFocus}
                    totalFocusToday={totalToday}
                />
            </div>
        </div>
    );
}

export default App;
