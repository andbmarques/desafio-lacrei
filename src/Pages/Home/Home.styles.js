import styled from 'styled-components';

export const Container = styled.div`
    padding: 4rem 4rem 0.5rem 4rem;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1040px){
        flex-direction: column;
    }

    @media screen and (max-width: 520px) {
        padding: 0.5rem 2rem;
    }
`;

export const Content = styled.div`
    width: 50vw;
`;

export const Title = styled.h1`
    width: 453px;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;

    @media screen and (max-width: 520px) {
        font-size: 1.5rem;
    }
`;

export const Text = styled.p`
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    width: 30rem;

    color: #515151;

    @media screen and (max-width: 520px) {
        font-size: 0.875rem;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;