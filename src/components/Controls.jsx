const Controls = ({ isRunning, mode, onToggleTimer, onSwitchMode, onReset }) => {
    const switchButtonText = mode === 'focus' ? 'SWITCH TO REST' : 'SWITCH TO FOCUS';
    const actionButtonText = isRunning ? 'PAUSE' : 'RESUME';

    return (
        <div className="controls-container">

            <button className="btn-secondary" onClick={onSwitchMode}>
                {switchButtonText}
            </button>

            <button className="btn-primary" onClick={onToggleTimer}>
                {actionButtonText}
            </button>

            <button className="btn-secondary" onClick={onReset}>
                RESET
            </button>
            
        </div>
    );
};

export default Controls;