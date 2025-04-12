import styled from "styled-components"
import Navigation from "../components/Navigation"
import Header from "../components/Header"
import Collection from "../components/collection"
import { useEffect, useRef, useState } from "react"
import { MediaCollections } from "../api/types/collection"
import { getCollection } from "../api/service/collection"
import { debounceText } from "../utils/functionUtils"

const Main = styled.main`
    background-color: ${props => props.theme.common.navBackground};
    display: flex;
    flex-direction: row;
    height: 100vh;
    padding: 8px;
  `

const Section = styled.section`
  ${({ theme }) => ({
    background: theme.common.background,
    borderRadius: '20px',
    width: '100%',
    padding: '40px',
    overflowY: "auto",
    scrollBehavior: 'smooth',
    height: '100%'
  })}
  @media (max-width: ${props => props.theme.breakPoint.sm}) {
    padding: 10px;
  }
  @media (max-width: ${props => props.theme.breakPoint.md}) {
    padding: 20px;
  }
  `

const Home = () => {

  const [orignCollection, setOrginCollection] = useState<MediaCollections | null>(null)
  const [filterCollection, setFilterCollection] = useState<MediaCollections | null>(null)
  const hasFetched = useRef(false)
  const [selectedItem, setSelecteditem] = useState('all')

  useEffect(() => {
    if (hasFetched.current) return
    hasFetched.current = true

    apiCall()

  }, [])

  const apiCall = async () => {
    const res = await getCollection()
    setOrginCollection(res.data)
    setFilterCollection(res.data)
  }


  const handleChange = (val: string) => {

    setSelecteditem(val)
    const filteredItem = [...(orignCollection ?? [])]?.filter(item => val === 'all' ? item : item.type?.toLowerCase() ===val.toLowerCase())
    setFilterCollection(filteredItem)
  }

  const SearchOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

    const value = await debounceText(event.target.value) as unknown as string
        
    const filteredItem = [...(orignCollection ?? [])]?.filter(item => item.name?.toLowerCase().match(value.toLowerCase()))
    setFilterCollection(filteredItem)
    
  }




  return (
    <Main>
      <Navigation />
      <Section>
        <Header selectedItem={selectedItem} handleChange={handleChange} SearchOnChange={SearchOnChange} />
        <Collection collection={filterCollection} />
      </Section>
    </Main>
  )
}

export default Home
