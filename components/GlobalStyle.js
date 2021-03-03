import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400');

	${normalize};

	html, body, #__next  {
		height: 100%;
	}

	body {
		background: linear-gradient(to right, hsl(229,14%,23%), hsl(306,6%,32%));
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: Montserrat, sans-serif;
		font-size: 18px;
		line-height: 1.5;
		color: #fff;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	a {
		color: hsl(350, 100%, 92%);
		text-decoration: none;
		display: inline-block;
	}
`;
