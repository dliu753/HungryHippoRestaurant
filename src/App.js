import { useState, useEffect } from 'react'
import Header from './components/Header'
import Menu from './components/menu/Menu'

function App() {
  const [data, setData] = useState([])

  useEffect(()=> {
    const getData = async () => {
      const mainsData = await fetchData("mains")
      const drinksData = await fetchData("drinks")
      const output = [mainsData, drinksData]
      setData(output)
    }

    getData()
  }, [])

  // Fetch data
  const fetchData = async (category) => {
    const res = await fetch ('http://localhost:5000/' + category)
    const fetchData = await res.json()
    
    // console.log(fetchData)
    return fetchData
  }


  return (
    <div className="wrapper">
      <Header />
      <Menu menuData={data}/>
    </div>

  );
}

export default App;
