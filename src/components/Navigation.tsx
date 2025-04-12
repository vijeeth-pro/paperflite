import styled from "styled-components"
import { CollectionIcon, CollectionSearchIcon, MenuIcon, MessageIcon, SearchIcon, SliderIcon, SpinIcon, TelegramIcon } from "../svg"
import { Li } from "../theme/Common"

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 64px 20px 40px;
    
    @media (max-width: ${props => props.theme.breakPoint.sm}) {
        padding: 32px 10px 20px;
    }
    
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 42px;
    align-items: center;
    width: fit-content;
`

function Navigation() {
    return (
        <Nav>
            <Ul>
                <Li><SearchIcon /></Li>
                <Li><SliderIcon /></Li>
                <Li><CollectionIcon /></Li>
                <Li><MessageIcon /></Li>
                <Li><CollectionSearchIcon /></Li>
                <Li><TelegramIcon /></Li>
            </Ul>
            <Ul>
                <Li><SpinIcon /></Li>
                <Li><MenuIcon /></Li>
            </Ul>
        </Nav>
    )
}

export default Navigation