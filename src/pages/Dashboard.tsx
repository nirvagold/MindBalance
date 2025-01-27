import React from 'react';
import Affirmations from '../components/Affirmations';
import BreakReminder from '../components/BreakReminder';
import Gratitude from '../components/Gratitude';
import MoodTracker from '../components/MoodTracker';
import Progress from '../components/Progress';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Welcome to MindBalance</h1>
            <Affirmations />
            <BreakReminder />
            <Gratitude />
            <MoodTracker />
            <Progress />
        </div>
    );
};

export default Dashboard;