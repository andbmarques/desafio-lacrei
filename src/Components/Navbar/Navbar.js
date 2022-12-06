import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, List, ListItem, Logo, Link } from './Navbar.styles.js';

const Navbar = () => {

    let location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname)
    }, [location]);

    const [activePage, setActivePage] = useState('');

    return (
        <Container>
            <Logo><Link to={'/'}>Lacrei</Link></Logo>
            <List>
                <ListItem
                    activepath={activePage === '/' ? "true" : "false"}
                >
                    <Link to='/'> Home </Link>
                </ListItem>
                <ListItem
                    activepath={activePage === '/pessoa-usuaria' ? "true" : "false"}
                >
                    <Link to='/pessoa-usuaria'> Pessoa Usuária </Link>
                </ListItem>
                <ListItem
                    activepath={activePage === '/profissional' ? "true" : "false"}
                >
                    <Link to='/profissional'> Profissional </Link>
                </ListItem>
            </List>
        </Container>
    )
}

export default Navbar;