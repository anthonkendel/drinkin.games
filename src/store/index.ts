import Vue from 'vue';
import Vuex from 'vuex';
import * as faker from 'faker';
import dayjs from 'dayjs';

Vue.use(Vuex);

interface State {
  isLoggedIn: boolean;
  games: Game[];
}

export class Game {
  public constructor(
    public id: string,
    public title: string,
    public instructions: string,
    public reviews: number[] = [],
    public created: Date = new Date(),
    public updated: Date = new Date(),
  ) {}

  public static random(): Game {
    return new Game(
      faker.random.uuid(),
      faker.lorem.word(),
      faker.lorem.words(300),
      [
        faker.random.number({ min: 1, max: 5 }),
        faker.random.number({ min: 1, max: 5 }),
        faker.random.number({ min: 1, max: 5 }),
        faker.random.number({ min: 1, max: 5 }),
      ],
      faker.date.recent(-4),
      faker.date.recent(0),
    );
  }
}

export const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    games: [
      Game.random(),
      Game.random(),
      Game.random(),
    ],
  } as State,
  getters: {
    game(state: State): (gId: string) => Game | undefined {
      return (gId: string) => {
        return state.games.find(game => game.id === gId);
      };
    },
    topGames(state: State): Game[] {
      const currentGames = [...state.games];
      const sortedGames = currentGames.sort((first: Game, second: Game) => {
        const sumFirst = first.reviews.reduce((x, y) => x + y, 0).toFixed(2);
        const sumSecond = second.reviews.reduce((x, y) => x + y, 0).toFixed(2);
        return parseFloat(sumSecond) - parseFloat(sumFirst);
      });
      const topGames = sortedGames.slice(0, 10);
      return topGames;
    },
    newGames(state: State): Game[] {
      const currentGames = [...state.games];
      const sortedGames = currentGames.sort((a: Game, b: Game) => {
        const dayjsA = dayjs(a.created);
        const dayjsB = dayjs(b.created);
        
        // ? if **a** is before **b**: sort a to a lower index than b.
        if (dayjsA.isBefore(dayjsB)) return -1;
        // ? if **b** is before **a**: sort a to a lower index than b.
        if (dayjsB.isBefore(dayjsA)) return -1;

        return 0;
      });
      const newGames = sortedGames.slice(0, 10);
      // eslint-disable-next-line no-console
      console.log(newGames);
      return newGames;
    }
  },
  mutations: {
    createGame(state: State, payload: Game): void {
      state.games.push(payload);
    }
  },
  actions: {
  },
  modules: {
  },
});
