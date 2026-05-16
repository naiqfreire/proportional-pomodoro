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
        <footer className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
                <span className="text-gray-400">Current Focus:</span>
                <span className="font-mono text-white">{formatDuration(currentSessionFocus)}</span>
            </div>
            
            <div className="w-px h-6 bg-border"></div>
            
            <div className="flex items-center gap-2">
                <span className="text-gray-400">Total Today:</span>
                <span className="font-mono text-white">{formatDuration(totalFocusToday)}</span>
            </div>
        </footer>
    );
};

export default StatsFooter;