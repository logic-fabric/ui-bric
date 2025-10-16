import { CustomButton } from './atoms/CustomButton'
import { CustomSelect } from './molecules/CustomSelect'

import './App.css'
import { CustomNumberField } from './molecules/CustomNumberField'

function App() {
  return (
    <>
      <CustomButton onPress={() => alert('Button pressé !')}>Cliquez-moi</CustomButton>

      <CustomNumberField
        label="Prix"
        defaultValue={49}
        formatOptions={{
          style: 'currency',
          currency: 'EUR'
        }}
      />

      <CustomSelect label="Animaux favoris" options={['Chat', 'Chien', 'Kangourou']} />
    </>
  )
}

export default App
