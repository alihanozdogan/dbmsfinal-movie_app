import { movie } from './movie';

export interface Genre {
    id: number;
    name: string;
    movie: movie;
}