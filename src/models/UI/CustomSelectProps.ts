export type CustomOptionItem = {
    value: string;
    label: string;
}

export type CustomSelectProps = {
    defaultValue: string | number;
    options: CustomOptionItem[];
    value: string | number;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    wrapClassName?: string;
}