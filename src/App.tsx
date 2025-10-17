import { Button } from './atoms/Button'
import { Select } from './molecules/Select'

import './App.css'
import { NumberField } from './molecules/NumberField'

function App() {
  return (
    <>
      <Button onPress={() => alert('Button pressé !')}>Cliquez-moi</Button>

      <NumberField
        label="Prix"
        defaultValue={49}
        formatOptions={{
          style: 'currency',
          currency: 'EUR'
        }}
      />

      <Select label="Animaux favoris" options={['Chat', 'Chien', 'Kangourou']} />
    </>
  )
}

export default App
