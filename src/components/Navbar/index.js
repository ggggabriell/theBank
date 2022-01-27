import React, {useEffect, useState} from 'react';
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
    MobileIcon, Nav, NavbarContainer, 
    NavBtn, 
    NavBtnLink, 
    NavItem, NavLinks, NavLogo, NavMenu, MySocialsIcons, MySocialsLink, NavbarLeftContainer}
    from './NavbarElements';



const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav]= useState(false);

    //Alterar a navbar de transparente para preto ao scrollar
    const changeNav=()=>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }
    //Alterar a navbar de transparente para preto ao scrollar
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    //Voltar para a home ao clicar na logo
    const toggleHome=()=>{
        scroll.scrollToTop()
    }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavbarLeftContainer>
                    <NavLogo to="/" onClick={toggleHome}>theBank</NavLogo>
                    <MySocialsIcons>
                        <MySocialsLink href="//www.linkedin.com/in/gabriel-santos-farias/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                        </MySocialsLink>
                        <MySocialsLink href="//github.com/ggggabriell" target="_blank" aria-label="Linkedin">
                            <FaGithub />
                        </MySocialsLink>   
                    </MySocialsIcons>
                    <MobileIcon
                    onClick={toggle}
                    >   
                        <FaBars />
                    </MobileIcon>
                </NavbarLeftContainer>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="sobre"
                         smooth={true} duration={700} spy={true}
                         exact='true' offset={-80}
                        >Sobre
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="descobrir"
                          smooth={true} duration={700} spy={true}
                          exact='true' offset={-80}
                        >Descobrir
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="servicos"
                          smooth={true} duration={700} spy={true}
                          exact='true' offset={-80}
                        >Serviços</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                          smooth={true} duration={700} spy={true}
                          exact='true' offset={-80}
                        >Assine já</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Assine agora</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>    
    );
};

export default Navbar;
