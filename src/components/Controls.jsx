const Controls = ({ isRunning, mode, onToggleTimer, onSwitchMode, onReset }) => {
    const switchButtonText = mode === 'focus' ? 'SWITCH TO REST' : 'SWITCH TO FOCUS';
    const actionButtonText = isRunning ? 'PAUSE' : 'RESUME';

    const primaryStyle = mode === 'focus' 
        ? 'text-focus border-focus drop-shadow-[0_0_15px_rgba(255,77,0,0.3)]' 
        : 'text-rest border-rest drop-shadow-[0_0_15px_rgba(0,255,149,0.3)]';

    return (
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 w-full">
            
            {/* Left Button */}
            <button 
                className="w-full py-3 px-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 border border-border hover:text-white hover:border-gray-500 transition-colors text-center leading-tight min-w-0 cursor-pointer" 
                onClick={onSwitchMode}
            >
                {switchButtonText}
            </button>

            {/* Middle Button */}
            <button 
                className={`w-full py-3 rounded-full font-bold text-[10px] sm:text-sm md:text-base border transition-all duration-300 hover:scale-105 text-center min-w-0 cursor-pointer ${primaryStyle}`} 
                onClick={onToggleTimer}
            >
                {actionButtonText}
            </button>

            {/* Right Button */}
            <button 
                className="w-full py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 border border-border hover:text-white hover:border-gray-500 transition-colors text-center min-w-0 cursor-pointer" 
                onClick={onReset}
            >
                RESET
            </button>
            
        </div>
    );
};

export default Controls;