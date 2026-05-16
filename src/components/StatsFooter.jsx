const StatsFooter = ({ currentSessionFocus, totalFocusToday }) => {
    const formatDuration = (totalSeconds) => {
        if (totalSeconds === 0) return '0m';

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        
        return `${minutes}m`;
    };

    return (
        <footer className="stats-footer">
            <div className="stat-item">
                <span className="stat-label">Current Focus:</span>
                <span className="stat-value">{formatDuration(currentSessionFocus)}</span>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
                <span className="stat-label">Total Today:</span>
                <span className="stat-value">{formatDuration(totalFocusToday)}</span>
            </div>
        </footer>
    );
};

export default StatsFooter;