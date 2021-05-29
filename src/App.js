import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from './components/menu/Menu'
import Home from './Home'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(()=> {
    // Fetches data from backend
    // const getData = async () => {
    //   const menuData = await fetchData("menu")
    //   setData(menuData)
    //   console.log("fetch server")
    //   console.log(menuData)
    // }

    // getData()
    
    // Using local data
    var data = require('./menu.json')
    setData( data )

  }, [])

  // // Fetch data
  // const fetchData = async (category) => {
  //   const res = await fetch ('http://localhost:5000/' + category)
  //   const fetchData = await res.json()
    
  //   return fetchData
  // }

  const addOrder = async (order) => {
    // await fetch('http://localhost:5000/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(order),
    // })
    alert("Your order is confirmed.")
  }

  return (
    <Router>
      <div className="wrapper">
        <header className='header'>
          <div className='links-wrapper'>
            <Link className='title-link' to='/'>Hungry Hippo Bistro</Link>
            <Link className='header-link' to='/menu'>Menu</Link>
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={() => <Menu menuData={data} addOrder={addOrder} />}  />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
