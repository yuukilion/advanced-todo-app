import { Modal, Input, Select, DatePicker } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import { useAppDispatch } from '@/hooks';
import { TodoState } from '@/stores/todo';
import { TodoSlice } from '@/stores/todo';

interface TodoModal {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const { TextArea } = Input;

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
      <label>
        タイトル
        <Input />
      </label>
      <label>
        カテゴリー
        <Select />
      </label>
      <label>
        優先度
        <Select />
      </label>
      <label>
        期限
        <DatePicker showTime />
      </label>
      <label>
        場所
        <Input />
      </label>
      <label>
        詳細
        <TextArea />
      </label>
    </Modal>
  );
}
