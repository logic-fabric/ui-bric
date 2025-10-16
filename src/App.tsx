import { CustomButton } from './atoms/CustomButton'
import { CustomSelect } from './molecules/CustomSelect'

import './App.css'

function App() {
  return (
    <>
      <CustomButton onPress={() => alert('Button pressé !')}>Cliquez-moi</CustomButton>

      <CustomSelect label="Animaux favoris" options={['Chat', 'Chien', 'Kangourou']} />
    </>
  )
}

export default App
