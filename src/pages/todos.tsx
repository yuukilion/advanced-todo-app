import CreateTodoModal from '@/components/CreateTodoModal';
import TodoCard from '@/components/TodoCard';
import { useAppSelector } from '@/hooks';
import { Button } from 'antd';
import { useState } from 'react';

export default function Todos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const todos = useAppSelector((state) => state);

  return (
    <div>
      {todos.length === 0 ? (
        <p>現在空です</p>
      ) : (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            category={todo.category}
            DateTime={todo.limit}
            priority={todo.priority}
          />
        ))
      )}
      <Button onClick={openModal}>追加する</Button>
      <CreateTodoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
