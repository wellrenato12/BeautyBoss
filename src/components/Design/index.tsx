import { WhatsappLogo } from "phosphor-react";
import { DesignContainer, ImageDesign, TextDesign } from "./styles";
import Sobrancelha from '../../assets/sobrancelha1.jpg'

export function Design() {
    return (
        <DesignContainer id="/design">
            <TextDesign>
                <h1>
                    Design de Sobrancelhas
                </h1>
                <p>Atendimento de segunda a sábado.</p>
                <p></p>
                <p>Click no botão abaixo e me envie uma mensagem para agendarmos.</p>
                <a href="https://wa.me/556798362110" target="__blank">
                    <button>
                        Agende agora
                        <WhatsappLogo size={24} color="#84cc16" />
                    </button>
                </a>
            </TextDesign>
            <ImageDesign>
                <img src={Sobrancelha} />
            </ImageDesign>
        </DesignContainer>
    )
}