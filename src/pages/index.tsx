import Head from 'next/head';
import { Calendar } from 'antd';
import { Typography } from 'antd';
import TodoCard from '@/components/TodoCard';

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <Head>
        <title>Advanced Todo APP</title>
        <meta name='description' content='Advanced Todo App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Title style={{ textAlign: 'center' }}>Advanced Todo App</Title>
        <div style={{ width: '1200px', margin: 'auto' }}>
          <Title level={3}>Calender</Title>
          <Calendar style={{ border: '1px solid gray' }} />
        </div>
        <div>comming soon</div>
        <TodoCard title={'サンプル'} priority={1} category={'ビジネス'} DateTime={'2022-01-01'} />
      </main>
    </>
  );
}
