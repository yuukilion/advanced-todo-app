import { TodoState } from '@/stores/todo';
import { Input } from 'antd';
import styled from 'styled-components';
import { ChangeTarget } from './CreateTodoModal';

interface LabeledInputProps {
  label?: string;
  onChange: (changeTarget: ChangeTarget, value: string) => void;
  changeTarget: ChangeTarget;
  state: TodoState;
}

const StyledInput = styled(Input)`
  width: 300px;
`;

export default function LabeledInput({
  label,
  onChange,
  changeTarget,
  state
}: LabeledInputProps) {
  const setTodoInfo = (value: string) => {
    onChange(changeTarget, value);
  };

  return (
    <div>
      <label>
        {label}
        <StyledInput
          value={state[changeTarget]}
          onChange={(e) => setTodoInfo(e.target.value)}
        />
      </label>
    </div>
  );
}
