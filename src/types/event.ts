export interface IEvent {
    id: number;
    title: string;
    photo: string;
    company: {
        photo: string;
        name: string;
    }
    date: string;
}