// src/stores/RepositoryStore.ts
import { makeAutoObservable } from "mobx";
import { Repository } from '../types'; 

class RepositoryStore {
    repositories: Repository[] = [];
    page: number = 1;
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchRepositories() {
        if (this.loading) return; // Предотвращаем повторные вызовы
        this.loading = true;

        const response = await fetch(`https://api.github.com/search/repositories?q=javascript&sort=stars&order=asc&page=${this.page}`);
        const data = await response.json();

        this.repositories.push(...data.items); // Добавляем новые репозитории
        this.page++;
        this.loading = false;
    }

    deleteRepository(id: number) {
        this.repositories = this.repositories.filter(repo => repo.id !== id);
    }

    updateRepository(id: number, newName: string) {
        const repo = this.repositories.find(repo => repo.id === id);
        if (repo) {
            repo.name = newName; // Обновляем имя репозитория
        }
    }
}

const repositoryStore = new RepositoryStore();

export default repositoryStore;
