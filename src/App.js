import { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from './components/menu/Menu'
import logo from './hippo.png'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(()=> {
    const getData = async () => {
      const menuData = await fetchData("menu")
      setData(menuData)
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

  const addOrder = async (order) => {
    const res = await fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
    // const data = await res.json()
    alert("Your order is confirmed.")
  }

  const Home = () => (
    useEffect(()=> {
      document.title = 'Hungry Hippo | Home'
    }),

    <Fragment>
      <div className='logo-wrappper'>
        <img className='logo' src={logo} alt='Hungry Hippo'/> 
      </div>
    </Fragment>
  );

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
