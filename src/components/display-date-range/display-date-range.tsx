import { useDateFormatter } from "@/hooks/useDateFormatter";

import type { DisplayDateRangeProps } from "./display-date-range.interface";

export function DisplayDateRange({
	style,
	endDate,
	startDate,
	isCurrent,
	className,
	now = new Date(),
}: DisplayDateRangeProps): React.ReactNode {
	const { dateToString, diffYearsMonths } = useDateFormatter();

	return (
		<span style={{ textWrap: 'nowrap', ...style }} className={className}>
			{!startDate && !endDate && !isCurrent && <>&ndash;</>}

			{!startDate && endDate && dateToString(endDate)}

			{startDate && isCurrent && (
				<>
					{dateToString(startDate)}
					&nbsp;&ndash;&nbsp;Currently
					&nbsp;&bull;&nbsp;
					{diffYearsMonths(startDate, now)}
				</>
			)}

			{startDate && endDate && !isCurrent && (
				<>
					{dateToString(startDate)}
					&nbsp;&ndash;&nbsp;
					{dateToString(endDate)}
					&nbsp;&bull;&nbsp;
					{diffYearsMonths(startDate, endDate)}
				</>
			)}

			{startDate && !endDate && !isCurrent && dateToString(startDate)}
		</span>
	);
};