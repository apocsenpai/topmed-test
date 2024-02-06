
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "@/app/styles";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Provider = ({ children }: React.PropsWithChildren) => {

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {children}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </ThemeProvider>
    )

}

export default Provider;