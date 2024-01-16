import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

interface ButtonDatePickerProps {
  readonly children: React.ReactNode;
  readonly value: Date | null;
  readonly disabled?: boolean;
  readonly includeDateIntervals?: { start: Date; end: Date }[] 
  readonly excludeDateIntervals?: { start: Date; end: Date }[] 
  readonly maxDate?: Date;
  readonly minDate?: Date;
  readonly onChange: (value: Date) => void;
}
export function ButtonDatePicker ({ children, value, maxDate, minDate, includeDateIntervals, excludeDateIntervals, disabled, onChange,...rest }: ButtonDatePickerProps) {
  return (
    <div {...rest }>
      <DatePicker
        selected={value}
        onChange={onChange}
        includeDateIntervals={includeDateIntervals}
        excludeDateIntervals={excludeDateIntervals}
        maxDate={maxDate}
        minDate={minDate}
        disabled={disabled}
        customInput={
          <Button>
            {children}
          </Button>
        }
      />
    </div>
  )
}


export const Button = styled.button`
  cursor: pointer;
  background-color: #F5F5F5;
  border: 1px solid #E6E6E6;
  border-radius: var(--border-radius-12);
  height: 64px;
  padding: 0 var(--spacing-16);
  text-align: left;
  width: 100%;
`