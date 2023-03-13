import { Modal, Input } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import { useAppDispatch } from '@/hooks';
import { TodoState } from '@/stores/todo';
import { TodoSlice } from '@/stores/todo';

interface TodoModal {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CreateTodoModal({
  isModalOpen,
  setIsModalOpen,
}: TodoModal) {
  const [todo, setTodo] = useState<TodoState>();
  const dispatch = useAppDispatch();
  const { add } = TodoSlice.actions;

  const createTodo = () => {
    if (todo) {
      dispatch(add(todo));
    }
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
      okText='作成'
      cancelText='キャンセル'
    >
      <Input />
    </Modal>
  );
}
