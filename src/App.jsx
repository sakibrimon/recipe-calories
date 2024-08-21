import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import { useRef } from 'react'

function App() {
  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header></Header>
      <Banner handleScroll={handleScroll}></Banner>
      <Recipes targetRef={targetRef}></Recipes>
    </>
  )
}

export default App
