import React from 'react'
import styled from 'styled-components'
import { SmallSearchIcon } from '../svg'

type Props = {
    onChange:  ( event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;
`
const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${props => props.theme.common.borderColor};
    border-radius: 10px;
    padding: 14px 12px;
    gap: 6px;
    width: 100%;
`


const SearchBox = ({onChange}: Props) => {
    return (
        <InputBox>
            <SmallSearchIcon />
            <Input onChange={onChange} placeholder='Type here to search...'/>
        </InputBox>
    )
}

export default SearchBox