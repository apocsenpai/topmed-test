
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "@/app/styles";

const Provider = ({ children }: React.PropsWithChildren) => {

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )

}

export default Provider;