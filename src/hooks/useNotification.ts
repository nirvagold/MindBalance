import { useEffect } from 'react';

const useNotification = (message: string, options?: NotificationOptions) => {
    useEffect(() => {
        if ('Notification' in window) {
            const handleNotification = () => {
                if (Notification.permission === 'granted') {
                    new Notification(message, options);
                } else if (Notification.permission !== 'denied') {
                    Notification.requestPermission().then(permission => {
                        if (permission === 'granted') {
                            new Notification(message, options);
                        }
                    });
                }
            };

            handleNotification();
        }
    }, [message, options]);
};

export default useNotification;