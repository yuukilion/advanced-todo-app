import { DatePicker, DatePickerProps } from 'antd';
import styled from 'styled-components';

interface LabeledDatePickerProps {
  label?: string;
  onChange: (value: DatePickerProps['value']) => void;
}

const StyledDatePicker = styled(DatePicker)`
  width: 300px;
`;

export default function LabeledDatePicker({
  label,
  onChange,
}: LabeledDatePickerProps) {
  const setTodoInfo = (value: DatePickerProps['value']) => {
    onChange(value);
  };

  return (
    <div>
      <label>
        {label}
        <StyledDatePicker
          showTime={{ format: 'HH:mm' }}
          onChange={setTodoInfo}
          format='YYYY-MM-DD HH:mm'
        />
      </label>
    </div>
  );
}
