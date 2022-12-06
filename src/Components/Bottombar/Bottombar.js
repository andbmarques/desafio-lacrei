import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Navlink, Link, NavlinkContainer, IconsContainer, Icon, ExternalLink, Small } from './Bottombar.styles';

import FacebookLogo from '../../Assets/Icons/FacebookLogo.svg';
import InstagramLogo from '../../Assets/Icons/InstagramLogo.svg';
import LinkedinLogo from '../../Assets/Icons/LinkedinLogo.svg';

const Bottombar = () => {

    let location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname)
    }, [location]);

    const [activePage, setActivePage] = useState('');

    return (
        <Container>
            <NavlinkContainer>
                <Navlink style={activePage === '/' ? { fontWeight: 'bold' } : { fontWeight: '400' }}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navlink>
                <Navlink style={activePage === '/pessoa-usuaria' ? { fontWeight: 'bold' } : { fontWeight: '400' }}>
                    <Link to='/pessoa-usuaria'>
                        Pesso Usuária
                    </Link>
                </Navlink>
                <Navlink style={activePage === '/profissional' ? { fontWeight: 'bold' } : { fontWeight: '400' }}>
                    <Link to='/profissional'>
                        Profissional
                    </Link>
                </Navlink>
            </NavlinkContainer>
            <IconsContainer>
                <ExternalLink target={'_blank'} href="https://www.instagram.com/lacrei.saude/">
                    <Icon src={InstagramLogo} />
                </ExternalLink>
                <ExternalLink target={'_blank'} href="https://www.facebook.com/lacrei.saude">
                    <Icon src={FacebookLogo} />
                </ExternalLink>
                <ExternalLink target={'_blank'} href="https://www.linkedin.com/company/lacrei/">
                    <Icon src={LinkedinLogo} />
                </ExternalLink>
            </IconsContainer>
            <Small>Desafio Front-end Lacrei</Small>
        </Container>
    )
}

export default Bottombar;