import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const MoodTracker = () => {
    const [moods, setMoods] = useState([]);
    const [currentMood, setCurrentMood] = useState('');

    useEffect(() => {
        const savedMoods = JSON.parse(localStorage.getItem('moods')) || [];
        setMoods(savedMoods);
    }, []);

    const handleMoodChange = (e) => {
        setCurrentMood(e.target.value);
    };

    const handleMoodSubmit = (e) => {
        e.preventDefault();
        if (currentMood) {
            const updatedMoods = [...moods, { mood: currentMood, date: new Date().toISOString() }];
            setMoods(updatedMoods);
            localStorage.setItem('moods', JSON.stringify(updatedMoods));
            setCurrentMood('');
        }
    };

    const moodData = {
        labels: moods.map(mood => new Date(mood.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Mood Tracker',
                data: moods.map(mood => mood.mood),
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1
            }
        ]
    };

    return (
        <div>
            <h2>Mood Tracker</h2>
            <form onSubmit={handleMoodSubmit}>
                <input
                    type="text"
                    value={currentMood}
                    onChange={handleMoodChange}
                    placeholder="How do you feel today?"
                />
                <button type="submit">Log Mood</button>
            </form>
            <Line data={moodData} />
        </div>
    );
};

export default MoodTracker;