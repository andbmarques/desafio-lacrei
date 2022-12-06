import React from "react";
import { Container, Title, Content, Text } from "./User.styles";

import UserIllustration from '../../Assets/UserIllustration.svg';

const User = () => {
    return (
        <Container>
            <Content>
                <Title>Pessoa Usuária</Title>
                <Text>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</Text>
            </Content>
            <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <img
                    src={UserIllustration}
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

export default User;