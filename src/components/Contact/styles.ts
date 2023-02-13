import styled from "styled-components";

export const ContactContainer = styled.footer`
    background: ${props => props.theme.white};
    width: 100%;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        max-width: 1376px;
        margin: auto;
        padding: 1rem 0;

        @media only screen and (max-width: 800px) {
            flex-direction: column;
            gap: 1rem;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: .25rem;

            li {
                display: flex;
                align-items: center;
                gap: .5rem;

                img {
                    width: 30px;
                }

                a {
                    display: flex;
                    align-items: center;
                    gap: .25rem;
                    transition: all .5s;
                    color: ${props => props.theme["black-900"]};

                &:hover {
                    color: ${props => props.theme["blue-500"]};
                    transition: all .5s;
                }
                }
            }
        }
        ul:first-child {
            gap: 1.5rem;

            @media only screen and (max-width: 800px) {
                gap: .25rem;
            }
        }
    }
`