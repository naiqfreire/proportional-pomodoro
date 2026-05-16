const TimerDisplay = ({ totalSeconds, mode }) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatTime = (time) => String(time).padStart(2, '0');

    const colorClass = mode === 'focus' ? 'text-focus' : 'text-rest';
    const borderColorClass = mode === 'focus' ? 'border-focus' : 'border-rest';
    const glowClass = mode === 'focus' 
        ? 'drop-shadow-[0_0_20px_rgba(255,77,0,0.4)]' 
        : 'drop-shadow-[0_0_20px_rgba(0,255,149,0.4)]';

    return (
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
            <div className={`flex items-center px-5 py-1.5 sm:px-6 sm:py-2 rounded-full border ${borderColorClass} ${colorClass} bg-surface/50`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse mr-3"></span>
                <span className="text-xs sm:text-xl font-semibold tracking-[0.2em]">
                    {mode.toUpperCase()}
                </span>
            </div>

            <div className={`font-mono text-8xl sm:text-9xl md:text-9xl xl:text-[10rem] 2xl:text-[15rem] font-bold tracking-tighter transition-colors duration-500 ${colorClass} ${glowClass}`}>
                {hours > 0 && `${formatTime(hours)}:`}
                {formatTime(minutes)}:{formatTime(seconds)}
            </div>
        </div>
    );
}; 

export default TimerDisplay;