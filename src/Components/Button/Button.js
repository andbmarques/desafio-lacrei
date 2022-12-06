import React from "react";
import { Container, Link } from "./Button.styles";

const Button = ({ title, to, theme }) => {
    return (
        <Container buttontheme={theme} >
            <Link to={to}>
                {title}
            </Link>
        </Container>
    )
}

export default Button;