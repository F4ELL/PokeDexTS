import React, { useEffect, useState } from "react"
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
          <div key={key}>
            {item.title}
          </div>
        ))} 
    </div>
  )
}

export default App
