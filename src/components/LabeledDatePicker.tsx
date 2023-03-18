import { TodoState } from '@/stores/todo';
import { DatePicker, DatePickerProps } from 'antd';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';

interface LabeledDatePickerProps {
  label?: string;
  onChange: (value: DatePickerProps['value']) => void;
  state: TodoState;
}

const DateTimeFormat = 'YYYY-MM-DD HH:mm';

const StyledDatePicker = styled(DatePicker)`
  width: 300px;
`;

export default function LabeledDatePicker({ label, onChange, state }: LabeledDatePickerProps) {
  const setTodoInfo = (value: DatePickerProps['value']) => {
    onChange(value);
  };
  const date: Dayjs | undefined = state['limit'] ? dayjs(state['limit']) : undefined;

  return (
    <div>
      <label>
        {label}
        <StyledDatePicker
          showTime={{ format: 'HH:mm' }}
          onChange={setTodoInfo}
          format={DateTimeFormat}
          showNow={false}
          value={date}
        />
      </label>
    </div>
  );
}
