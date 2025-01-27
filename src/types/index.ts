export interface User {
    id: string;
    name: string;
    email: string;
    language: string;
}

export interface MoodLog {
    date: string;
    mood: string;
    notes?: string;
}

export interface GratitudeEntry {
    date: string;
    entries: string[];
}

export interface Affirmation {
    id: string;
    text: string;
}

export interface ProgressStats {
    totalExercisesCompleted: number;
    totalPoints: number;
    badgesEarned: string[];
}

export interface NotificationSettings {
    enabled: boolean;
    breakReminderTime: number; // in minutes
}