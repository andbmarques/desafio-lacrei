import React from "react";
import { Container, Title, Content, Text } from "./Professional.styles";

import ProfessionalIllustration from '../../Assets/ProfessionalIllustration.svg';

const User = () => {
    return (
        <Container>
            <Content>
                <Title>Profissional</Title>
                <Text>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</Text>
            </Content>
            <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <img
                    src={ProfessionalIllustration}
                    alt="5 pessoas sendo elas três médicos, uma enfermeira e uma secretária."
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