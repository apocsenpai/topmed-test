import { HTMLAttributes } from "react";
import { Heading } from "./styled";

export interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
    $colorKey?: "primary" | "secondary";
}

const Title = ({ children, ...props }: ITitle) => {
    return (
        <Heading {...props}>{children}</Heading>
    )
}

export default Title