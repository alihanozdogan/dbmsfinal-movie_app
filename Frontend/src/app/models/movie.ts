import { Actor } from './Actor';
import { Genre } from './Genre';
export interface movie {
    id: number;
    title: string;
    year: number;
    imageUrl: string;
    actors: Actor[];
    rating: string;
    genres: Genre[];
}