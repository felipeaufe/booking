import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  readonly children: React.ReactNode;
  readonly value: Date | null;
  readonly disabled?: boolean;
  readonly includeDateIntervals?: { start: Date; end: Date }[];
  readonly excludeDateIntervals?: { start: Date; end: Date }[];
  readonly maxDate?: Date;
  readonly minDate?: Date;
  readonly selectsRange?: boolean;
  readonly startDate?: Date | null;
  readonly endDate?: Date | null;


  readonly onChange: (value: [Date | null, Date | null]) => void;
  readonly onCalendarClose: () => void;
}
export function DatePicker({
  children,
  value,
  maxDate,
  minDate,
  includeDateIntervals,
  excludeDateIntervals,
  disabled,
  selectsRange,
  endDate,
  startDate,
  
  onChange,
  onCalendarClose,
  ...rest
}: DatePickerProps) {
  return (
    <div {...rest}>
      <ReactDatePicker
        selected={value}
        onChange={onChange}
        includeDateIntervals={includeDateIntervals}
        excludeDateIntervals={excludeDateIntervals}
        maxDate={maxDate}
        minDate={minDate}
        disabled={disabled}
        selectsRange={selectsRange}
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        customInput={<div>{children}</div>}
        onCalendarClose={onCalendarClose}
      >
       <div style={{ color: "red" }}>Don't forget to check the weather!</div> 
      </ReactDatePicker>
    </div>
  );
}