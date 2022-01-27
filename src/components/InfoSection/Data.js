import photo1 from '../../images/photo1.svg'
import photo2 from '../../images/photo2.svg'
import photo3 from '../../images/photo3.svg'
import photo4 from '../../images/photo4.svg'

//Data para alterar os estilos de cada infosection no site
export const homeObjOne = {
    id: 'sobre',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Banco Premium',
    headLine: 'Transações ilimtadas e sem taxas.',
    description: 'Obtenha acesso ao nosso app exclusivo que permite o envio de transações ilimitadas sem taxas.',
    buttonLabel: 'Obter acesso',
    imgStart: true,
    img: photo1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'descobrir',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Acesso Ilimitado',
    headLine: 'Entre na sua conta a qualquer hora.',
    description: 'Nós temos suporte disponível independente de onde você estiver. Tudo o que você precisa é um dispositivo com conexão a internet.',
    buttonLabel: 'Aprenda mais',
    imgStart: false,
    img: photo2,
    alt: 'money',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'servicos',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Entre no nosso time.',
    headLine: 'Criar uma conta é muito fácil e rapido.',
    description: 'Tudo pronto em menos de 10 minutos. Tudo o que você precisa é adicionar sua informação e pronto.',
    buttonLabel: 'Criar uma conta',
    imgStart: true,
    img: photo3,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjFour = {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Ganhe créditos',
    headLine: 'Aumente o seu crédito e suas chances de obter recompensas.',
    description: 'Concorra a recompensas exclusivas de membros premium.',
    buttonLabel: 'Saiba mais',
    imgStart: false,
    img: photo4,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};
