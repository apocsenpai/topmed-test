import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ButtonGroup, FieldSet, Form, InputGroup } from "./styled";
import { IoIosLock, IoMdPerson } from "react-icons/io";
import { signIn } from "@/services";
import { ErrorMessage } from "@/app/styles/GlobalStyle";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { Icon } from "@/components/atoms/Icon";

interface Inputs {
    email: string
    password: string
}


const LoginForm = () => {

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

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>

                <FieldSet>
                    <Input
                        $error={!!(errors.email || errors.root)}
                        placeholder="Usuário"
                        {...register("email", { onChange: () => clearErrors('root'), required: "O campo Usuário é obrigatório!" })}
                    />
                    <Icon icon={IoMdPerson} />
                    {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
                </FieldSet>

                <FieldSet>
                    <Input
                        $error={!!(errors["password"] || errors.root)}
                        placeholder="Senha" type="password"
                        {...register("password", { onChange: () => clearErrors('root'), required: "O campo Senha é obrigatório!" })}
                    />
                    <Icon icon={IoIosLock} />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </FieldSet>
                {errors.root?.requestError && <ErrorMessage>{errors.root.requestError.message}</ErrorMessage>}
            </InputGroup>
            <ButtonGroup>
                <Button>
                    Entrar
                </Button>
                <a>
                    Esqueceu a senha?
                </a>
            </ButtonGroup>
        </Form>
    )

}

export default LoginForm;