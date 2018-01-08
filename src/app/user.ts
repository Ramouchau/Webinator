import { Planet } from './planet';

export class User {
  id: number;
  name: string;
  planets: Planet[];

  constructor() {
    this.initializeUser();
  }

  initializeUser(): void {
    this.id = 0;
    this.name = "User 1";
    this.planets = Array();
  }

  getTotalShips(): number {
    let total = 0;

    for (var i = this.planets.length - 1; i >= 0; i--) {
      total += this.planets[i].ships;
    }

    return total;
  }
}