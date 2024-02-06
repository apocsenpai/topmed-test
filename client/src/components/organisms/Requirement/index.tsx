import { MdLinkedCamera } from "react-icons/md";
import { GreenBox } from "@/app/styles/GlobalStyle"

import Sound from "@/assets/sound.svg";
import { Box } from "./styled";
import TitleHeader from "@/components/molecules/TitleHeader";
import { Circle } from "@/components/templates/HomeTemplate/styled";
import Button from "@/components/atoms/Button";

const Requirement = () => {
    return (
        <GreenBox>
            <TitleHeader
                title="Teste de requisitos"
                subtitle="Teste seus acessos a câmera, microfone e velocidade da internet."
                titleParams={{ $colorKey: "secondary" }}
                subTitleParams={{ $colorKey: "secondary", $size: "xs", $opacity: true }}
            />

            <Box>
                <img src={Sound} alt="Ondas sonoras" />

                <Circle>
                    <MdLinkedCamera />
                </Circle>
            </Box>

            <Box>
                <Button $colorKey="secondary">Realizar Teste</Button>
            </Box>
        </GreenBox>
    )
}

export default Requirement;