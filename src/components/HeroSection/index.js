import React,{useState} from 'react';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, ImageBg } from './HeroElements';
import Image from '../../images/image.svg'
import { Button } from "../ButtonElements";

const HeroSection = () => {
    const [hover, setHover]= useState(false);

    const onHover=()=>{
        setHover(!hover);
    };

  return (
    <HeroContainer id="home">
        <HeroBg>
            <ImageBg src={Image} type='svg'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Banco Virtual</HeroH1>
            <HeroP>
                 Assine agora e receba R$500 em 
                 crédito no seu próximo pagamento.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    smooth={true} duration={700} spy={true}
                    exact='true' offset={-80}
                >
                  Comece agora {hover? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    );
};

export default HeroSection;
