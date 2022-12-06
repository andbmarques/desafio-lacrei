import React, { useState } from "react";

import { Container, List, ListItem, Logo, Link } from './Navbar.styles.js';

const Navbar = () => {

    const [activePage, setActivePage] = useState('Home');

    return (
        <Container>
            <Logo><Link to={'/'}>Lacrei</Link></Logo>
            <List>
                <ListItem
                    activepath={activePage === 'Home' ? "true" : "false"}
                    onClick={() => setActivePage('Home')}
                >
                    <Link to='/'> Home </Link>
                </ListItem>
                <ListItem
                    activepath={activePage === 'User' ? "true" : "false"}
                    onClick={() => setActivePage('User')}
                >
                    <Link to='/pessoa-usuaria'> Pessoa Usuária </Link>
                </ListItem>
                <ListItem
                    activepath={activePage === 'Professional' ? "true" : "false"}
                    onClick={() => setActivePage('Professional')}
                >
                    <Link to='/profissional'> Profissional </Link>
                </ListItem>
            </List>
        </Container>
    )
}

export default Navbar;