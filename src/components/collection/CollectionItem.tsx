import { MediaCollection } from '../../api/types/collection'
import styled from 'styled-components'
import { Div, MediumText, Paragraph } from '../../theme/Common'
import { useState } from 'react'

const Image = styled.img`
    border-radius: 20px;
    max-width: 284px;
    max-height: 180px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const EditText = styled(MediumText)`
        cursor: pointer;
    &:focus{
        border: 1px solid red
    };
    `

interface Props extends MediaCollection { }

const CollectionItem = (props: Props) => {
    const { thumbnail, name, items, type } = props
    const [contentEditable, setContentEditable] = useState(false)

    const handleDoubleClick = () => {
        setContentEditable(pre => !pre)
    }

    
    return (
        <Div>
            <Image src={thumbnail} alt={name} loading='lazy' />
            <EditText style={{ fontSize: 14, marginTop: '12px' }}
                contentEditable={contentEditable}
                onDoubleClick={handleDoubleClick}
                onBlur={handleDoubleClick}
                
            >{name}</EditText>
            <Paragraph style={{ textTransform: 'capitalize', marginTop: '2px' }}>{`${items.length} ${type}`}</Paragraph>
        </Div>
    )
}

export default CollectionItem