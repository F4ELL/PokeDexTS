import React, { useEffect, useState } from "react"
import Button from "./Button"
import Card from "./Card"
import GlobalStyle from "./globalStyles"
import PokeApi from "./PokeApi"

function App() {

  const [ pokeList, setPokeList ] = useState([])


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
        {pokeList.map((item, key) => (
          <Button item={item} key={key}/>
        ))}

        <Card item={pokeList}/>
    </div>
  )
}

export default App
