import React, { useEffect, useState } from "react"
import Button from "./Button"
import Card from "./Card"
import GlobalStyle from "./globalStyles"
import PokeApi from "./PokeApi"

export type TPoke = {
  title: string,
  slug: string,
  items: any
}

function App() {

  

  const [ pokeList, setPokeList ] = useState<TPoke[]>([])
  const [ current, setCurrent ] = useState(0)


  useEffect(() => {
    const loadAll = async () => {
      const list = await PokeApi.getPokeList()
      setPokeList(list);
    }

    loadAll()
  }, [])


  const handleButton = (key: number) => {
    setCurrent(key)
  }

  return (
    <div>

    <GlobalStyle />
        {pokeList.map((item, key) => (
          <Button key={key} item={item} current={setCurrent}/>
          
        ))}

        <Card item={pokeList[current]}/>
    </div>
  )
}

export default App
