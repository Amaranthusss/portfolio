export type ValueExtension = string | number | readonly string[] | undefined;

export interface SelectProps<
  TValue extends ValueExtension
> extends CommonProps<HTMLSelectElement> {
  value?: TValue;
  label?: string;
  options?: SelectOption<TValue>[];
  onChange?: (value: TValue) => void;
}

export interface SelectOption<TValue extends ValueExtension> {
  label: string;
  value: TValue;
}
