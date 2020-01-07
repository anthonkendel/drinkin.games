import Vue from 'vue';
import Vuex from 'vuex';
import * as faker from 'faker';

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
      Game.random(),
      Game.random(),
    ],
  } as State,
  getters: {
    game(state: State): (gId: string) => Game | undefined {
      return (gId: string) => {
        return state.games.find(game => game.id === gId);
      };
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
