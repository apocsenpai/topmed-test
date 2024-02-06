import Title, { ITitle } from "@/components/atoms/Title";
import Paragraph, { IParagraph } from "@/components/atoms/Paragraph";
import { TitleBox } from "./styled";

export interface ITitleHeader {
    title?: string;
    subtitle?: string;
    titleParams?: ITitle;
    subTitleParams?: IParagraph
    $padding?: string;
}

const TitleHeader = ({ title, subtitle, $padding, titleParams, subTitleParams }: ITitleHeader) => {
    return (
        <TitleBox $padding={$padding}>
            {title && <Title  {...titleParams}>{title}</Title>}
            {subtitle && <Paragraph {...subTitleParams}>{subtitle}</Paragraph>}
        </TitleBox>
    )
}

export default TitleHeader;