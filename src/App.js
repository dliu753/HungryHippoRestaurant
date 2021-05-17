import { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from './components/menu/Menu'

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

  const Home = () => (
    useEffect(()=> {
      document.title = 'Hungry Hippo | Home'
    }),

    <Fragment>
      <h1>Home</h1>
    </Fragment>
  );

  return (
    <Router>
      <div className="wrapper">
        <header className='header'>
          <h1>Hungry Hippo Bistro</h1>
          <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/menu'>Menu</Link></li>
              </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={() => <Menu menuData={data} />}  />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
