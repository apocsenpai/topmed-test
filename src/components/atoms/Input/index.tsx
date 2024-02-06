import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { StyledInput } from "./styled";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    $error: boolean;
}

const Input = forwardRef(({ $error = false, ...props }: IInput, ref: Ref<HTMLInputElement>) => {
    return (
        <StyledInput $error={$error} {...props} ref={ref} />
    )
})

export default Input;