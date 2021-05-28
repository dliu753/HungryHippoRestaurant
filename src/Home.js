import { Fragment, useEffect } from 'react'
import logo from './hippo.png'
import './App.css'

const Home = () => {

    return(
        useEffect(()=> {
            document.title = 'Hungry Hippo | Home'
        }),
      
        <Fragment>
            <div className='logo-wrapper'>
                <img className='logo' src={logo} alt='Hungry Hippo'/> 
            </div>
        </Fragment>
    )
}

export default Home