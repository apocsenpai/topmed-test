import { Container, GreenBox, WhiteBox, Main, Header, Title, Paragraph, Form, InputGroup, Input, ButtonGroup, Button, Footer } from "./styled";
import { IoIosLock, IoMdPerson } from "react-icons/io";
import TopMed from "@/assets/topmed_logo.png"
import NextPlus from "@/assets/nextplus-logo.png"

function Home() {
    return <Container>
        <Main>
            <WhiteBox>
                <Header>
                    <Title>Bem Vindo,</Title>
                    <Paragraph>Faça login para continuar.</Paragraph>
                </Header>
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
                        <a to={"/forgot-password"}>
                            Esqueceu a senha?
                        </a>
                    </ButtonGroup>
                </Form>
                <Footer>
                    <img src={TopMed} alt="TopMed - Saúde ao seu alcance." /><img src={NextPlus} alt="NextPlus" />
                </Footer>
            </WhiteBox>
            <GreenBox>
                <Title $colorKey={"secondary"}>Teste de requisitos</Title>
                <Paragraph $colorKey={"secondary"} $size={"xs"}  $opacity>Teste seus acessos a câmera, microfone e velocidade da internet.</Paragraph>
            </GreenBox>
        </Main>
    </Container>
}

export default Home;