import TodoCard from '@/components/TodoCard';
import { useAppDispatch, useAppSelector } from '@/hooks';

export default function Todos() {
  const todos = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

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
    </div>
  );
}
