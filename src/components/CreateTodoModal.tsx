import { DatePickerProps, Modal } from 'antd';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useAppDispatch } from '@/hooks';
import { TodoState } from '@/stores/todo';
import { TodoSlice } from '@/stores/todo';
import LabeledInput from './LabeledInput';
import LabeledTextArea from './LabeldTextArea';
import LabeledSelectBox from './LabeledSelectBox';
import LabeledDatePicker from './LabeledDatePicker';

interface TodoModal {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export type ChangeTarget = 'title' | 'priority' | 'category';

export default function CreateTodoModal({ isModalOpen, setIsModalOpen }: TodoModal) {
  const [todo, setTodo] = useState<TodoState>({
    id: 0,
    title: '',
    category: '',
    priority: '',
    limit: '',
    detail: '',
  });

  const PRIORITY_OPTIONS = [
    { value: '1', label: '低' },
    { value: '2', label: '中' },
    { value: '3', label: '高' },
  ];

  const CATEGORY_OPTIONS = [
    { value: '雑務', label: '雑務' },
    { value: 'ビジネス', label: 'ビジネス' },
    { value: '勉強', label: '勉強' },
  ];

  const dispatch = useAppDispatch();
  const { add } = TodoSlice.actions;

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  const createTodo = () => {
    dispatch(add(todo));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setTodo({
      id: 0,
      title: '',
      category: '',
      priority: '',
      limit: '',
      detail: '',
    });
    setIsModalOpen(false);
  };

  const handleInputChange = (changeTarget: ChangeTarget, value: string) => {
    setTodo({ ...todo, [changeTarget]: value });
  };

  const handleTextAreaChange = (value: string) => {
    setTodo({ ...todo, detail: value });
  };

  const handleSelectBoxChange = (changeTarget: ChangeTarget, value: string) => {
    setTodo({ ...todo, [changeTarget]: value });
  };

  const handleDatePickerChange = (value: DatePickerProps['value']) => {
    if (value) {
      setTodo({ ...todo, limit: value.format('YYYY-MM-DD HH:mm') });
    }
  };

  return (
    <Modal open={isModalOpen} onOk={createTodo} onCancel={() => handleCancel()} okText='作成' cancelText='キャンセル'>
      <LabeledInput label='タイトル' onChange={handleInputChange} changeTarget='title' state={todo} />
      <LabeledSelectBox
        label='カテゴリー'
        changeTarget='category'
        onChange={handleSelectBoxChange}
        options={CATEGORY_OPTIONS}
        state={todo}
      />
      <LabeledSelectBox
        label='優先度'
        changeTarget='priority'
        onChange={handleSelectBoxChange}
        options={PRIORITY_OPTIONS}
        state={todo}
      />
      <LabeledDatePicker label='期限' onChange={handleDatePickerChange} state={todo} />
      <LabeledTextArea label='詳細' onChange={handleTextAreaChange} state={todo} />
    </Modal>
  );
}
