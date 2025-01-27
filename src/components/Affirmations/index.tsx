import React from 'react';

const Affirmations: React.FC = () => {
    const affirmations = [
        "You are capable of achieving great things.",
        "Believe in yourself and all that you are.",
        "Every day is a new opportunity to grow.",
        "You have the power to create change.",
        "Your potential is limitless."
    ];

    return (
        <div className="affirmations">
            <h2>Daily Affirmations</h2>
            <ul>
                {affirmations.map((affirmation, index) => (
                    <li key={index}>{affirmation}</li>
                ))}
            </ul>
            <div className="challenge">
                <h3>Today's Challenge:</h3>
                <p>Write down three things you love about yourself.</p>
            </div>
        </div>
    );
};

export default Affirmations;