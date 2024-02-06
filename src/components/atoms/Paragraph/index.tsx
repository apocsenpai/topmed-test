import { HTMLAttributes } from "react";
import { Text } from "./styled";

export interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
    $colorKey?: "primary" | "secondary";
    $opacity?: boolean;
    $size?: "xs" | "sm" | "md";
}

const Paragraph = ({ $size = "sm", $opacity = false, $colorKey = "primary", children, ...props }: IParagraph) => {
    return <Text $size={$size} $opacity={$opacity} $colorKey={$colorKey} {...props}>{children}</Text>
}

export default Paragraph;