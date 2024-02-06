import { Container, GreenBox, WhiteBox, Main, TitleHeader, Title, Paragraph, Form, InputGroup, Input, ButtonGroup, Button, Footer, Circle, Box, ErrorMessage } from "./styled";
import { IoIosLock, IoMdPerson } from "react-icons/io";
import { MdLinkedCamera } from "react-icons/md";
import TopMed from "@/assets/topmed_logo.svg";
import NextPlus from "@/assets/nextplus-logo.svg";
import Sound from "@/assets/sound.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "@/services";
import { toast } from "react-toastify";

interface Inputs {
    email: string
    password: string
}

function Home() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const token = await signIn(data);

            toast.success("Your login was successful!");

            //redirect aqui
        } catch (error) {
            const errorMessage = error.response.data as string

            toast.error(errorMessage);

            setError("root.requestError", { type: "requestError", message: errorMessage.toLocaleLowerCase().includes("locked") ? "Conta bloqueada por 20 minutos!" : "Email e/ou senha inválidos!" })
        }
    }

    return <Container>
        <Main>
            <WhiteBox>
                <TitleHeader $padding="0 1rem">
                    <Title>Bem Vindo,</Title>
                    <Paragraph>Faça login para continuar.</Paragraph>
                </TitleHeader>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <fieldset>
                            <Input placeholder="Usuário" $error={!!(errors.email || errors.root)} {...register("email", { onChange: () => clearErrors('root'), required: "O campo Usuário é obrigatório!" })} />
                            <IoMdPerson />
                        </fieldset>
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        <fieldset>
                            <Input placeholder="Senha" type="password" $error={!!(errors.password || errors.root)} {...register("password", { onChange: () => clearErrors('root'), required: "O campo Senha é obrigatório!" })} />
                            <IoIosLock />
                        </fieldset>
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        {errors.root?.requestError && <ErrorMessage>{errors.root.requestError.message}</ErrorMessage>}
                    </InputGroup>
                    <ButtonGroup>
                        <Button onClick={() => clearErrors()}>
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