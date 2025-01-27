import React from 'react';

const Exercises: React.FC = () => {
    const exercises = [
        { id: 1, title: 'Journaling', description: 'Reflect on your day and write down your thoughts.' },
        { id: 2, title: 'Visualization', description: 'Spend a few minutes visualizing your goals and dreams.' },
        { id: 3, title: 'Breathing Techniques', description: 'Practice deep breathing exercises to relax your mind.' },
        { id: 4, title: 'Quick Meditation', description: 'Take a short break to meditate and clear your mind.' },
        { id: 5, title: 'Stretching', description: 'Do some light stretches to relieve tension.' },
        { id: 6, title: 'Soundscapes', description: 'Listen to calming sounds like rain or ocean waves.' },
    ];

    return (
        <div>
            <h1>Daily Exercises</h1>
            <ul>
                {exercises.map(exercise => (
                    <li key={exercise.id}>
                        <h2>{exercise.title}</h2>
                        <p>{exercise.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exercises;