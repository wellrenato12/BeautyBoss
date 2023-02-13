import { ImageMakeup, MakeupContainer, TextMakeup } from "./styles";
import { ArrowCircleRight, WhatsappLogo } from "phosphor-react";
import Maquiagem from '../../assets/maquiagem6.png'

export function Makeup() {
    return (
        <MakeupContainer id="/makeup">
            <ImageMakeup>
                <img src={Maquiagem} />
            </ImageMakeup>
            <TextMakeup>
                <h1>Maquiagens</h1>
                <p>Acompanhe meu trabalho pelas redes sociais.</p>
                {/* <p>Veja abaixo algumas maquiagens feitas por mim.</p> */}
                {/* <p>Click no botão abaixo e me envie uma mensagem para agendarmos.</p> */}
                <div>
                    <a href="https://www.instagram.com/beauty_boss04/" target="__blank">
                        Instagram
                        <span><ArrowCircleRight size={20} /></span>
                    </a>
                </div>
                <div>
                    <a href="https://www.tiktok.com/@thata_barbosa4" target="__blank">
                        TikTok
                        <span><ArrowCircleRight size={20} /></span>
                    </a>
                </div>

                <a href="https://wa.me/556798362110" target="__blank">
                    <button>
                        Agende agora
                        <WhatsappLogo size={24} color="#84cc16" />
                    </button>
                </a>
            </TextMakeup>
        </MakeupContainer>
    )
}