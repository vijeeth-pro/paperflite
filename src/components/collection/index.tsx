import { lazy, Suspense } from "react"
import { MediaCollections } from "../../api/types/collection"
import { Div } from "../../theme/Common"
import styled from "styled-components"

const CollectionItem = lazy(() => import("./CollectionItem"))

const Grid = styled(Div)`
    display: grid;
    grid-column-gap: 27px;
    grid-row-gap: 38px;
    margin-top: 24px;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: ${props => props.theme.breakPoint.lg}) {
      grid-template-columns: repeat(3, 1fr);
    };
    @media (max-width: ${props => props.theme.breakPoint.md}) {
      grid-template-columns: repeat(2,1fr);
      grid-row-gap: 30px;
    };
    @media (max-width: ${props => props.theme.breakPoint.sm}) {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      grid-row-gap: 60px;
    };
`

type Props = {
  collection: MediaCollections | null
}

const Collection = (props:Props) => {
  const {collection} = props
  
  return (
    <Div>
      <Suspense fallback={<p color="black"><i>Loading...</i></p>}>
        <Grid >
          {collection?.map((item) => {
            return (
              <CollectionItem key={item.name} {...item} />
            )
          })}
        </Grid>
      </Suspense>

    </Div>
  )
}

export default Collection