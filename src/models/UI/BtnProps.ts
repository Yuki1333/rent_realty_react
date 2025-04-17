export type BtnProps = {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    className?: string;
    name?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}