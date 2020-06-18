// Libraries
import React from "react";
import styled from "styled-components";

// Styles
import "./styles.scss";

const Background = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const GameBox = styled.div`
	width: 80vw;
	height: 80vh;
	z-index: 1;

	background-color: black;
	border: 2px gray solid;
`;

export default function RPG() {
	return (
		<div style={{ position: "fixed" }}>
			<div id="background"></div>
			<div id="middleground"></div>
			<div id="foreground"></div>
			<Background>
				<GameBox>{/* Do game lol test */}</GameBox>
			</Background>
		</div>
	);
}
