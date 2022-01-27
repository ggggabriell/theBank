import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems,
         FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle,
         FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia,
         SocialMediaWrap, WebsiteRights } from './FooterElements';


const Footer = () => {

    //Mover para a home ao clicar na logo
    const toggleHome=()=>{
        scroll.scrollToTop()
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    {/* Cada FooterLinkItems representa uma coluna no footer.*/}
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                            <FooterLink to="/signin">Como Funciona</FooterLink>
                            <FooterLink to="/signin">Depoimentos</FooterLink>
                            <FooterLink to="/signin">Carreiras</FooterLink>
                            <FooterLink to="/signin">Investidores</FooterLink>
                            <FooterLink to="/signin">Termos de Serviço</FooterLink>           
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Entre em contato</FooterLinkTitle>
                            <FooterLink to="/signin">Contato</FooterLink>
                            <FooterLink to="/signin">Suporte</FooterLink>
                            <FooterLink to="/signin">Carreiras</FooterLink>
                            <FooterLink to="/signin">Patrocinadores</FooterLink>           
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Envie um video</FooterLink>
                            <FooterLink to="/signin">Agência</FooterLink>
                            <FooterLink to="/signin">Influenciadores</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"
                    onClick={toggleHome}
                    >theBank
                    </SocialLogo>
                    <WebsiteRights>theBank © {new Date().getFullYear()} Todos os direitos reservados.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="//www.linkedin.com/in/gabriel-santos-farias/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>

  );
};

export default Footer;
