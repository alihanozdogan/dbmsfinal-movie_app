import { movie } from './movie';

export interface Actor {
    id: number;
    name: string;
    surname: string;
    movie: movie;
}