import React from "react";
import Button from "../../Components/Button/Button";
import { Container, Title, Content, Text, ButtonsContainer } from "./Home.styles";

import HomeIllustration from '../../Assets/HomeIllustration.svg';

const Home = () => {
    return (
        <Container>
            <Content>
                <Title>Boas vindas a Lacrei Saúde</Title>
                <Text>{`Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+`}</Text>
                <ButtonsContainer>
                    <Button
                        title="Pessoa Usuária"
                        to="/pessoa-usuaria"
                        theme="primary"
                    />
                    <Button
                        title="Profissional"
                        to="/profissional"
                        theme="secondary"
                    />
                </ButtonsContainer>
            </Content>
            <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <img
                    src={HomeIllustration}
                    alt="Médica segurando uma prancheta e de fundo um celular com mensagens e icones em volta."
                    style={{
                        width: 540,
                        height: 421
                    }}
                />
            </Content>
        </Container>
    )
}

export default Home;