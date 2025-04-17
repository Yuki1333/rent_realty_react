import { LoginProps } from "@models/LoginProps";

export type HeaderProps = Omit<LoginProps, 'onLoginClick'> & {
    onLoginClick?: () => void;
};