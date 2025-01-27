const STORAGE_KEY = 'mindbalance_user_data';

export const saveToLocalStorage = (data: any) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getFromLocalStorage = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
};

export const clearLocalStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
};