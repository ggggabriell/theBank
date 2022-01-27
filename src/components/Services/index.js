import React from 'react';
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';

import Icon1 from '../../images/photo1.svg';
import Icon2 from '../../images/photo2.svg';
import Icon3 from '../../images/photo3.svg';

const Services = () => {

//Fica entre os infosections  
  return (
    <ServicesContainer id="servies">
        <ServicesH1>Nossos Serviços</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Reduza as Despezas</ServicesH2>
                <ServicesP>Te ajudamos a reduzir suas taxas e aumentar seus ganhos.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Atendimento Virtual</ServicesH2>
                <ServicesP>Você pode acessar sua plataforma online em qualquer lugar do mundo.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Beneficios Especiais </ServicesH2>
                <ServicesP>Garanta já o seu de membro especial.</ServicesP>
            </ServicesCard>

       </ServicesWrapper>
    </ServicesContainer>

  );
};

export default Services;
