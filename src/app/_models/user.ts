import { Planet } from './planet';

export interface User {
	id: number;
	username: string;
	email: string;
	score: number|null;
	bestScore: number|null;
	actionPointsCount: number;
	lastUpdate: Date;
	planets: Array<Planet>;
}
