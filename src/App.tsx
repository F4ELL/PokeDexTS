import React, { useEffect, useState } from "react"
import Button from "./Button"
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
        {pokeList.map((item, key) => (
          <Button item={item} key={key}/>
        ))}
    </div>
  )
}

export default App
