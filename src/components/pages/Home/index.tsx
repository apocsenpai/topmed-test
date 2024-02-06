import { Container, GreenBox, WhiteBox, Main, TitleHeader, Title, Paragraph, Form, InputGroup, Input, ButtonGroup, Button, Footer, Circle, Box } from "./styled";
import { IoIosLock, IoMdPerson } from "react-icons/io";
import { MdLinkedCamera } from "react-icons/md";
import TopMed from "@/assets/topmed_logo.svg";
import NextPlus from "@/assets/nextplus-logo.svg";
import Sound from "@/assets/sound.svg";

function Home() {
    return <Container>
        <Main>
            <WhiteBox>
                <TitleHeader $padding="0 1rem">
                    <Title>Bem Vindo,</Title>
                    <Paragraph>Faça login para continuar.</Paragraph>
                </TitleHeader>
                <Form>
                    <InputGroup>
                        <fieldset>
                            <Input placeholder="Usuário" />
                            <IoMdPerson />
                        </fieldset>
                        <fieldset>
                            <Input placeholder="Senha" type="password" />
                            <IoIosLock />
                        </fieldset>

                    </InputGroup>
                    <ButtonGroup>
                        <Button>
                            ENTRAR
                        </Button>
                        <a>
                            Esqueceu a senha?
                        </a>
                    </ButtonGroup>
                </Form>
                <Footer>
                    <img src={TopMed} alt="TopMed - Saúde ao seu alcance." />
                    <img src={NextPlus} alt="NextPlus" />
                </Footer>
            </WhiteBox>
            <GreenBox>
                <TitleHeader>
                    <Title $colorKey={"secondary"}>Teste de requisitos</Title>
                    <Paragraph $colorKey={"secondary"} $size={"xs"} $opacity>Teste seus acessos a câmera, microfone e velocidade da internet.</Paragraph>
                </TitleHeader>
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
        </Main>
    </Container>
}

export default Home;