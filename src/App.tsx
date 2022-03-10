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

  return (
    <div>
    <GlobalStyle />
        <div className="container">          
          <Card item={pokeList[current]} index={current}/>
          <div className="btn--poke">
            {pokeList.map((item, key) => (
              <Button key={key} item={item} current={setCurrent} index={key}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default App
