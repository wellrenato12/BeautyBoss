import styled from "styled-components";

export const DesignContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    max-width: 1376px;
    margin: 0 auto 5rem;
    padding: 2rem;
    border-radius: 12px;
    background-color: ${props => props.theme["yellow-200"]};
    color: ${props => props.theme.black};

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`

export const TextDesign = styled.div`
    width: 40%;

    @media only screen and (max-width: 800px) {
        align-items: center;
        padding: 1rem;
        width: 80%;
        text-align: center;
    }
    
    h1 {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-bottom: 2rem;

        @media only screen and (max-width: 800px) {
            justify-content: center;
        }
    }

    p {
        padding-top: 1rem;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        width: 200px;
        border-radius: 8px;
        padding: 1rem;
        margin-top: 2rem;
        background-color: ${props => props.theme.black};
        color: ${props => props.theme.white};
        transition: all .5s;

        &:hover {
            box-shadow: 0 0 2rem ${props => props.theme.white};
            transition: all .5s;
        }

        @media only screen and (max-width: 800px) {
            margin: 2rem auto 0;
        }
    }
`

export const ImageDesign = styled.div`
    img {
        border-radius: 12px;
        height: 350px;

        @media only screen and (max-width: 1024px) {
            height: 250px;
        }

        @media only screen and (max-width: 800px) {
            height: 200px;
        }
    }
`