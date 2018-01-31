import { Planet } from './planet';

export class User {
	public id: number;
	public username: string;
	public email: string;
	public score: number|null;
	public lastUpdate: Date;
	public actionPointsCount: number;
	public planets: Array<Planet>;
	public ships: number;
}

export const user = new User();
