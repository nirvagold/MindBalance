import React, { useState, useEffect } from 'react';

const Gratitude: React.FC = () => {
    const [gratitudes, setGratitudes] = useState<string[]>(['', '', '']);
    const [reminder, setReminder] = useState<boolean>(false);

    useEffect(() => {
        const savedGratitudes = localStorage.getItem('gratitudes');
        if (savedGratitudes) {
            setGratitudes(JSON.parse(savedGratitudes));
        }
        const reminderInterval = setInterval(() => {
            setReminder(true);
        }, 86400000); // 24 hours in milliseconds

        return () => clearInterval(reminderInterval);
    }, []);

    const handleInputChange = (index: number, value: string) => {
        const newGratitudes = [...gratitudes];
        newGratitudes[index] = value;
        setGratitudes(newGratitudes);
        localStorage.setItem('gratitudes', JSON.stringify(newGratitudes));
    };

    const handleSubmit = () => {
        alert('Thank you for sharing your gratitude!');
        setGratitudes(['', '', '']);
        localStorage.removeItem('gratitudes');
    };

    return (
        <div>
            <h2>Gratitude Journal</h2>
            {gratitudes.map((gratitude, index) => (
                <input
                    key={index}
                    type="text"
                    value={gratitude}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`What are you grateful for #${index + 1}?`}
                />
            ))}
            <button onClick={handleSubmit}>Submit</button>
            {reminder && <p>Don't forget to record your gratitude today!</p>}
        </div>
    );
};

export default Gratitude;