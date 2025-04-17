export type CustomInputProps = {
    type: 'text' | 'email' | 'number' | 'url' | 'search';
    value: string | number;
    className?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    wrapClassName?: string;
}