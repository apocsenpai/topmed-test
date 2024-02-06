import { Container, Main } from "@/app/styles/GlobalStyle"
import Login from "@/components/organisms/Login"
import Requirement from "@/components/organisms/Requirement"

const HomeTemplate = () => {
    return (
        <Container>
            <Main>
                <Login />
                <Requirement />
            </Main>
        </Container>)
}

export default HomeTemplate