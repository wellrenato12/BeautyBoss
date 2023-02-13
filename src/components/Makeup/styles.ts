import styled from "styled-components";

export const MakeupContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    max-width: 1376px;
    margin: 0 auto 5rem;
    padding: 2rem;
    background-color: #f1f1f1;
    border-radius: 12px;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        padding: 2rem 0 6rem;
    }
`

export const ImageMakeup = styled.div`
    img {
        border-radius: 12px;
        height: 350px;
        object-fit: cover;

        @media only screen and (max-width: 1024px) {
            height: 250px;
        }

        @media only screen and (max-width: 800px) {
            height: 200px;
        }
    }
`

export const TextMakeup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

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

    div {
        width: 115px;

        a {
            display: flex;
            gap: .25rem;
            transition: all .5s;
            color: ${props => props.theme["black-900"]};

            &:hover {
                color: ${props => props.theme["blue-500"]};
                gap: 0.5rem;
                transition: all .5s;
            }

            span {
                display: flex;
                align-items: center;

            }
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        width: 200px;
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1rem;
        background-color: ${props => props.theme["black-900"]};
        color: ${props => props.theme.white};
        transition: all .5s;

        &:hover {
            box-shadow: 0 0 1rem ${props => props.theme["black-900"]};
            transition: all .5s;
        }

        @media only screen and (max-width: 800px) {
            margin: 2rem auto 0;
        }
    }
`