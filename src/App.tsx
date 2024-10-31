// src/App.tsx
import React from 'react';
import RepositoryList from './components/RepositoryList';
import { Layout, Typography } from 'antd';
import styles from './styles/App.module.css';
import 'antd/dist/reset.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Layout className={styles.container}>
    <Header className={styles.Header}>
      <Title level={2}>Infinite Scroll with TypeScript and MobX</Title>
    </Header>
    <Content style={{ padding: '1rem', overflow: 'auto', height: '100%' }}>
      <RepositoryList />
    </Content>
  </Layout>

  );
};

export default App;

