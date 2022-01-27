import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {

  return( 
    <SidebarContainer
    isOpen={isOpen}
    onClick={toggle}
    >
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="sobre" onClick={toggle} >Sobre</SidebarLink>
                <SidebarLink to="descobrir" onClick={toggle} >Descobrir</SidebarLink>
                <SidebarLink to="servicos" onClick={toggle} >Serviços</SidebarLink>
                <SidebarLink to="signup" onClick={toggle} >Assine já</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Assine agora</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
