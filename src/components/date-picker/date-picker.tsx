import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

interface DatePickerProps {
  readonly children: React.ReactNode;
  readonly value: Date | null;
  readonly disabled?: boolean;
  readonly includeDateIntervals?: { start: Date; end: Date }[];
  readonly excludeDateIntervals?: { start: Date; end: Date }[];
  readonly maxDate?: Date | null;
  readonly minDate?: Date;
  readonly selectsRange?: boolean;
  readonly startDate?: Date | null;
  readonly endDate?: Date | null;
  readonly monthsShown?: number;
  readonly highlightDates?: Date[] | null;

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
  monthsShown = 1,
  highlightDates,

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
        monthsShown={monthsShown}
        highlightDates={highlightDates ?? []}
        onCalendarClose={onCalendarClose}
        customInput={children}
      >
        <Info>* Date of another reservation</Info>
      </ReactDatePicker>
    </div>
  );
}

const Info = styled.p`
  margin: 0;
  color: var(--color-primary);
`;
