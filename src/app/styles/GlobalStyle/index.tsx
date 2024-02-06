import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
	font-family: 'Alata';
	font-weight: 400;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  min-height: 100dvh;
  padding-top: 7.5rem;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Main = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.75rem;
  overflow: hidden;
`;

export const WhiteBox = styled.aside`
  padding: 3rem 1.5rem 1.125rem;
`;

export const GreenBox = styled.aside`
  width: 12.5rem;
  padding: 3rem 0.75rem 0 1.5rem;
  background-color: ${({ theme }) => theme.color.primary.main};
  box-shadow: 4px 0px 4px 0px #00000040 inset;
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.font.xs};
  font-family: ${({ theme }) => theme.family.base};
  color: ${({ theme }) => theme.color.danger};
`;
