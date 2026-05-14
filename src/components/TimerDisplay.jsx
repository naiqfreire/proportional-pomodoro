const TimerDisplay = ({ totalSeconds, mode }) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatTime = (time) => String(time).padStart(2, '0');

    return (
        <div className={`timer-container ${mode}`}>
            <div className="status-badge">
                <span className="pulse-dot"></span>
                {mode.toUpperCase()}
            </div>

            <div className="timer-font">
                {hours > 0 && `${formatTime(hours)}:`}
                {formatTime(minutes)}:{formatTime(seconds)}
            </div>
        </div>
    );
}; 

export default TimerDisplay;