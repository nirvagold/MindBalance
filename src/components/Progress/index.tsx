import React from 'react';
import { useEffect, useState } from 'react';
import { getUserProgress } from '../../utils/storage';
import { ProgressChart } from './ProgressChart';

const Progress = () => {
    const [progressData, setProgressData] = useState([]);

    useEffect(() => {
        const data = getUserProgress();
        setProgressData(data);
    }, []);

    return (
        <div className="progress-container">
            <h2>Your Progress</h2>
            <ProgressChart data={progressData} />
        </div>
    );
};

export default Progress;