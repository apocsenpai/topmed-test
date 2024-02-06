import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    $colorKey?: "primary" | "secondary";
}

const Button = ({ $colorKey, children }: IButton) => {

    return (
        <StyledButton $colorKey={$colorKey}>
            {children}
        </StyledButton>
    )

}

export default Button;