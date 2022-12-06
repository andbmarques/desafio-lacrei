import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    height: 3.75rem;
    width: 100vw;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 4rem;

    @media screen and (max-width: 1040px) {
        padding: 0.5rem 2rem;
    }

    @media screen and (max-width: 520px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 4rem;
    }
`;

export const Logo = styled.h1`
    color: #018762;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.7;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`;

export const ListItem = styled.li`
    text-decoration: none;
    margin: 0 20px;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.activepath === 'true' ? '#018762' : '#1F1F1F'};
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    
    &:active, &:visited, &:link {
        color: inherit;
    }

    

    &:hover {
        opacity: 0.7;
    }
`;