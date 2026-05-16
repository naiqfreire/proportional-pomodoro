const IntensitySelector = ({ currentRatio, mode, onSelectRatio }) => {
    const options = [
        { label: '10%', value: 0.1 },
        { label: '20%', value: 0.2 },
        { label: '40%', value: 0.4 }
    ];

    const isDisabled = mode === 'rest';

    return (
        <div className={`intensity-container ${isDisabled ? 'disabled' : ''}`}>
            <p className="intensity-title">Rest Intensity</p>
            
            <div className="segmented-control">
                {options.map((option) => {
                    const isActive = currentRatio === option.value;
                    
                    return (
                        <button
                        key={option.value}
                        className={`segment-btn ${isActive ? 'active' : ''}`}
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