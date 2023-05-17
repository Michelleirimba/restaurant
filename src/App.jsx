import './App.css'
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import StylesComponent from './components/class/StylesComponent'
import ActivityOne from './exercises/ActivityOne'
import UseStateComponent from './components/class/UseStateComponent'
import UseEffectComponent from './components/class/UseEffectComponent'
import RbgActivity from './components/RgbActivity'
import Home from './pages/Home'
import Countries from './exercises/Countries'
import RestaurantDetails from './components/RestaurantDetails'
import PassingProps from './components/class/PassingProps'
function App() {

  return (
    <div>
      {/* <StylesComponent/> */}
      {/* <ActivityOne/> */}
       {/* <UseStateComponent/>  */}
      {/* <UseEffectComponent/> */}
      {/* <RbgActivity/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Countries/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/StylesComponent' element={<StylesComponent/>} />
          <Route exact path='/ActivityOne' element={< ActivityOne/>} />
          <Route exact path='/UseStateComponent' element={<UseStateComponent/>} />
          <Route exact path='/UseEffectComponent' element={<UseEffectComponent/>} />
          <Route exact path='/RbgActivity' element={<RbgActivity/>} />
          <Route exact path='/countries' element={<Countries/>} />
          <Route exact path='/:id' element={<RestaurantDetails/>} />
          <Route exact path='/passingProps' element={<PassingProps/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
