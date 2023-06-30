export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface Todo {
    id: number;
    title?: string;
    completed: boolean;
}

export interface Payment {
    id: number;
    title: string;
    body: string;
}
