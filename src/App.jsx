import './App.css'
import { info } from './cardebi'
import Card from './components/card/Card'

function App() {
  return (
    <div className='flex'>
    {info.map(( el , i )=> (
      <Card
      key = {i}
      imgUrl={el.imgUrl}
      name={el.name}
      desc={el.description}
      button={el.button}
      hover={el.hover}
      backgroundColor={el.backgroundColor}
      buttonColor={el.buttonColor}
      />
    ))}
    </div>
  )
}

export default App