import React, { useEffect } from 'react';
import { useNotification } from '../../hooks/useNotification';

const BreakReminder: React.FC = () => {
    const { notify } = useNotification();

    useEffect(() => {
        const interval = setInterval(() => {
            notify('Time for a break! Consider doing a quick meditation or stretch.');
        }, 3600000); // Notify every hour

        return () => clearInterval(interval);
    }, [notify]);

    return (
        <div>
            <h2>Break Reminder</h2>
            <p>Stay mindful and take regular breaks to improve your well-being!</p>
        </div>
    );
};

export default BreakReminder;