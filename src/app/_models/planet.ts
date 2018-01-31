import { User } from './user';

export class Planet {
	public id: number;
	public name: string;
	public age: number;
	public event: 'none'|'meteorit';
	public shipsCount: number;
	public lastUpdateTime: Date;
	public owner: User|null;
}

export const planets: Array<Planet> = [];
