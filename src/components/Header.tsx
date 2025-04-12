import styled from "styled-components"
import { Div, H1, IconContainer, Li, MediumText, SubText } from "../theme/Common"
import { theme } from "../theme"
import { ClipBoardIcon, Deleteicon, ListingIcon, PlusIcon, PlusIconRed, SpinIcon, TextIcon } from "../svg"
import SearchBox from "./SearchBox"

const listOfButton = [{
    name: 'All Files',
    value: 'all'
}, {
    name: 'Photos',
    value: 'images'
}, {
    name: 'Videos',
    value: 'videos'
}, {
    name: 'Documents',
    value: 'documents'
}]


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* width: 100%; */
`
const SearchContainer = styled(ContainerBox)`
@media (max-width: ${props => props.theme.breakPoint.md}) {
    margin-top: 20px;
    width: 100%;
}
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

const CircleDashButton = styled.button`
    ${({ theme }) => ({
        borderStyle: 'dashed',
        borderColor: theme.textColor.grey,
        borderRadius: '50px',
        width: '40px',
        height: '40px',
        borderWidth: '1px',
        cursor: 'pointer',
    })}
`

const LifsButton = styled.button<{ isselected: string }>`
    ${({ theme, isselected, }) => ({
        ...theme.font.medium,
        borderStyle: 'solid',
        borderRadius: '50px',
        height: '40px',
        borderWidth: '1px',
        borderColor: theme.textColor.grey,
        outline: 'none',
        paddingLeft: '12px',
        paddingRight: '12px',
        cursor: 'pointer',
        ...(isselected === 'true' ? {
            background: theme.common.rose,
            color: theme.common.white,
            borderColor: 'transparent',
        } : {})
    })}
`

const ToolsDiv = styled(Div)`
    display: flex;
    margin-top: 10px;
    gap: 10px;
    @media (max-width: ${props => props.theme.breakPoint.md}) {

        flex-direction: column-reverse;
        
    }
    `

const MenuWrap = styled(Container)`
    margin-top: 22px;
    flex-wrap: nowrap;
    @media (max-width: ${props => props.theme.breakPoint.sm}) {
    
        flex-direction: column-reverse;
        align-items: flex-end;
        row-gap: 10px;
        
    }

`

type Props = {
    selectedItem: string
    handleChange: (val: string) => void
    SearchOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const Header = (props: Props) => {
    const { selectedItem, handleChange, SearchOnChange } = props

    return (
        <Box>
            <Container>
                <ContainerBox>
                    <Div>
                        <H1>collections</H1>
                        <SubText color={theme.textColor.grey}>personalized content storyboards</SubText>
                    </Div>

                </ContainerBox>
                <SearchContainer>
                    <Div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                        <SearchBox onChange={SearchOnChange} />
                        <IconContainer>
                            <SpinIcon />
                        </IconContainer>
                    </Div>
                    <ToolsDiv >
                        <Div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignSelf: 'flex-end' }}>
                            <IconContainer>
                                <TextIcon />
                            </IconContainer>
                            <IconContainer>
                                <Deleteicon />
                            </IconContainer>
                            <IconContainer>
                                <ClipBoardIcon />
                            </IconContainer>
                        </Div>
                        <IconContainer style={{ display: 'flex', alignItems: 'center', paddingLeft: '24px', paddingRight: '24px', gap: '6px' }}>
                            <PlusIconRed />
                            Create new collection
                        </IconContainer>
                    </ToolsDiv>
                </SearchContainer>
            </Container>
            <MenuWrap >
                <ContainerBox>
                    <Container>
                        <Ul style={{ flexWrap: 'wrap' }}>

                            <Li>
                                <CircleDashButton>
                                    <PlusIcon />
                                </CircleDashButton>
                            </Li>
                            {listOfButton.map(item => {
                                return (
                                    <Li key={item.name}>
                                        <LifsButton onClick={() => handleChange(item.value)} isselected={`${selectedItem === item.value}`}>{item.name}</LifsButton>
                                    </Li>
                                )
                            })}
                        </Ul>
                    </Container>
                </ContainerBox>
                <ContainerBox>
                    <Div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>

                        <Div style={{ textAlign: 'right' }}>
                            <MediumText style={{ color: theme.textColor.grey, fontSize: '10px' }}>Sort by</MediumText>
                            <Div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <MediumText>Created date</MediumText>
                            </Div>
                        </Div>
                        <IconContainer>
                            <ListingIcon />
                        </IconContainer>

                    </Div>
                </ContainerBox>
            </MenuWrap>

        </Box>
    )
}

export default Header