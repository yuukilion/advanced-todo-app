import { TodoState } from '@/stores/todo';
import { Input } from 'antd';
import styled from 'styled-components';

interface LabeledTextAreaProps {
  label?: string;
  onChange: (value: string) => void;
  state: TodoState;
}

const { TextArea } = Input;

const StyledTextArea = styled(TextArea)`
  width: 300px;
`;

export default function LabeledTextArea({
  label,
  onChange,
  state
}: LabeledTextAreaProps) {
  const setTodoInfo = (value: string) => {
    onChange(value);
  };

  return (
    <div>
      <label>
        {label}
        <StyledTextArea
          value={state.detail}
          onChange={(e) => setTodoInfo(e.target.value)}
        />
      </label>
    </div>
  );
}
