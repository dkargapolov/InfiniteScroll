// src/stores/index.ts
import RepositoryStore from './RepositoryStore.ts'; // Подставьте правильный путь
import { makeAutoObservable } from 'mobx';

class RootStore {
  repositoryStore: typeof RepositoryStore;

  constructor() {
    this.repositoryStore = RepositoryStore;
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

export const useStores = () => rootStore;
export default rootStore;
