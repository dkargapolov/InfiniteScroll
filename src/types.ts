// src/types.ts
// src/types.ts
// src/types.ts
export interface Repository {
    id: number;
    name: string;
    owner: {
        login: string;
    };
    html_url: string;
    // Добавьте другие поля, которые вам нужны
}

