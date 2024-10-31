// src/components/RepositoryList.tsx
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../stores';
import RepositoryItem from './RepositoryItem';
import styles from './RepositoryList.module.css';

const RepositoryList = observer(() => {
    const { repositoryStore } = useStores();

    useEffect(() => {
        // Загружаем начальные данные при первом рендере
        repositoryStore.fetchRepositories();

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            // Проверяем, если пользователь прокрутил до конца страницы и данные не загружаются
            if (scrollTop + clientHeight >= scrollHeight - 5 && !repositoryStore.loading) {
                repositoryStore.fetchRepositories(); // Загружаем следующие данные
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Убираем обработчик при размонтировании
    }, [repositoryStore]);

    return (
        <div className={styles.list}>
            {repositoryStore.repositories.map(repo => (
                <RepositoryItem key={repo.id} repo={repo} />
            ))}
            {repositoryStore.loading && <div>Loading...</div>}
        </div>
    );
});

export default RepositoryList;
