
import { ThemeProvider } from "styled-components";
import Theme from "@/app/styles/Theme";

const Provider = ({ children }: React.PropsWithChildren) => {

    return <ThemeProvider theme={Theme}>{children}</ThemeProvider>

}

export default Provider;