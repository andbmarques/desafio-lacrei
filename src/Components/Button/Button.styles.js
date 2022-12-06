import styled from "styled-components";
import { Link as BaseLink } from "react-router-dom";

export const Container = styled.div`
    background-color: #018762;
    width: 192px;
    height: 48px;
    background: ${props => props.buttontheme === 'secondary' ? "#ffffff" : "#018762"};
    border: ${props => props.buttontheme === 'secondary' ? "2px solid #018762" : "none"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 69px;
    cursor: pointer;
    transition: 1s all ease;
    color: ${props => props.buttontheme === 'secondary' ? "#018762" : "#ffffff"};
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    &:hover {
        opacity: 0.7;
    }
`;

export const Link = styled(BaseLink)`
    text-decoration: none;

    &:active, &:visited, &:link {
        color: inherit;
    }
`;
