import { User } from './user';

export interface Planet {
	id: number;
	name: string;
	age: number;
	event: 'none'|'meteorit';
	shipsCount: number;
	lastUpdateTime: Date;
	owner: User|null;
}
