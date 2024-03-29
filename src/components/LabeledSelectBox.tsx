import { TodoState } from '@/stores/todo';
import { Select } from 'antd';
import { BaseOptionType } from 'antd/es/select';
import styled from 'styled-components';
import { ChangeTarget } from './CreateTodoModal';

interface LabeledSelectBoxProps {
  label?: string;
  onChange: (changeTarget: ChangeTarget, value: string) => void;
  options: BaseOptionType[];
  changeTarget: ChangeTarget;
  state: TodoState;
}

const StyledSelectBox = styled(Select)`
  width: 300px;
`;

export default function LabeledSelectBox({ label, onChange, options, changeTarget, state }: LabeledSelectBoxProps) {
  const setTodoInfo = (changeTarget: ChangeTarget, value: unknown) => {
    if (typeof value === 'string') {
      onChange(changeTarget, value);
    }
  };

  return (
    <div>
      <label>
        {label}
        <StyledSelectBox
          value={state[changeTarget]}
          onChange={(value) => setTodoInfo(changeTarget, value)}
          options={options}
        />
      </label>
    </div>
  );
}
