const IntensitySelector = ({ currentRatio, mode, onSelectRatio }) => {
    const options = [
        { label: '10%', value: 0.1 },
        { label: '20%', value: 0.2 },
        { label: '40%', value: 0.4 }
    ];

    const isDisabled = mode === 'rest';

    const activeColor = mode === 'focus' 
        ? 'border-focus text-focus drop-shadow-[0_0_10px_rgba(255,77,0,0.3)]' 
        : 'border-rest text-rest drop-shadow-[0_0_10px_rgba(0,255,149,0.3)]';

    return (
        <div className={`flex flex-col items-center gap-3 mt-4 w-full transition-opacity duration-300 ${isDisabled ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
            <p className="text-sm text-gray-400">Rest Intensity</p>
            
            <div className="flex p-1 rounded-full bg-surface border border-border w-full max-w-xs sm:max-w-none justify-between">
                {options.map((option) => {
                    const isActive = currentRatio === option.value;
                    
                    return (
                        <button
                            key={option.value}
                            className={`flex-1 text-center py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 ${isActive ? activeColor : 'border-transparent text-gray-400 hover:text-white'}`}
                            onClick={() => onSelectRatio(option.value)}
                            disabled={isDisabled}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default IntensitySelector;