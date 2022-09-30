import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { getProducts } from './Redux/Actions/Actions'
import { Home } from './Components/Dumb/Home'
import { Shop } from './Components/Dumb/Shop' 
import { Component404 } from './Components/Dumb/Component404'

function App() {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='*' element={<Component404/>}/>
      </Routes>
    </div>
  );
}

export default App;