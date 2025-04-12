import styled from "styled-components"

export const Div = styled.div``

export const H1 = styled.h1`
    ${({theme}) => ({
        ...theme.font.h1,
    })}
    @media (max-width: ${props => props.theme.breakPoint.sm}) {

        font-size: 24px;
        
    };
`

type SubTextType = {
    color?: string
}

export const SubText = styled.p<SubTextType>`
    ${({theme, color}) => ({
        ...theme.font.subText,
        ...(color ? {color}: {})
    })}

`

export const MediumText = styled.p`
${({theme}) => ({
    ...theme.font.medium
})}
`

export const Paragraph = styled.p`
${({theme}) => ({
    ...theme.font.paragraph
})}
`

export const Li = styled.li`
    list-style: none;
    cursor: pointer;
`

export const IconContainer = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${props => props.theme.common.borderColor};
    border-radius: 10px;
    padding: 14px 12px;
    background-color: transparent;
    cursor: pointer;
    min-width: 40px;
`
