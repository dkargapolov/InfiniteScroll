// src/components/RepositoryItem.tsx
import React from 'react';
import { Repository } from '../types'; // Импортируйте ваш интерфейс
import { Card, Button, Modal, Input } from 'antd';
import { useStores } from '../stores'; // Импортируйте хук для доступа к стору

interface RepositoryItemProps {
    repo: Repository; // Укажите тип для параметра repo
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo }) => {
    const { repositoryStore } = useStores(); // Получите доступ к repositoryStore
    const [isEditing, setIsEditing] = React.useState(false);
    const [newName, setNewName] = React.useState(repo.name);

    const handleDelete = () => {
        repositoryStore.deleteRepository(repo.id); // Удалите репозиторий по ID
    };

    const handleEdit = () => {
        repositoryStore.updateRepository(repo.id, newName); // Обновите имя репозитория
        setIsEditing(false); // Закройте модальное окно редактирования
    };

    return (
        <Card
            title={repo.name}
            extra={<a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
            style={{ width: 300 }}
        >
            <p>Owner: {repo.owner.login}</p>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button type="primary" danger onClick={handleDelete}>Delete</Button>


            <Modal
                title="Edit Repository"
                visible={isEditing}
                onOk={handleEdit}
                onCancel={() => setIsEditing(false)}
            >
                <Input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter new repository name"
                />
            </Modal>
        </Card>
    );
};

export default RepositoryItem;
