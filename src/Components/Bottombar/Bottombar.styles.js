import styled from "styled-components";
import { Link as BaseLink } from "react-router-dom";

export const Container = styled.div`
    border-top: 1px solid #B0E0D3;
    margin: 0 4rem;
    padding-top: 2rem;
`;

export const NavlinkContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Navlink = styled.p`
    margin-right: 2.5rem;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #1F1F1F;
`;

export const Link = styled(BaseLink)`
    text-decoration: none;

    &:active, &:visited {
        color: inherit;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1.5rem 0;
`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
`;

export const ExternalLink = styled.a`
    text-decoration: none;
    margin-right: 2.25rem;

    &:active, &:visited {
        color: inherit;
    }
`;

export const Small = styled.small`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #515151;
`; 