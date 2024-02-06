import { WhiteBox } from "@/app/styles/GlobalStyle"

import TopMed from "@/assets/topmed_logo.svg";
import NextPlus from "@/assets/nextplus-logo.svg";
import TitleHeader from "@/components/molecules/TitleHeader";
import LoginForm from "@/components/molecules/LoginForm";
import { Footer } from "@/components/templates/HomeTemplate/styled";

const Login = () => {

    return (
        <WhiteBox>
            <TitleHeader
                title="Bem Vindo,"
                subtitle="Faça o login para continuar."
                $padding="0 1rem"
            />
            <LoginForm/>
            <Footer>
                <img src={TopMed} alt="TopMed - Saúde ao seu alcance." />
                <img src={NextPlus} alt="NextPlus" />
            </Footer>
        </WhiteBox>
    )

}

export default Login;