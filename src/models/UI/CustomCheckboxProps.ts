export type CustomCheckboxProps = {
    label: string;
    id: string | number;
    checked: boolean;
    disabled?: boolean;
    className?: string;
    wrapClassName?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}