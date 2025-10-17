import { Button } from './atoms/Button'
import {TextField} from './molecules/TextField'
import { Select } from './molecules/Select'
import { TextFieldsGroup } from './molecules/TextFieldsGroup'

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

      <TextFieldsGroup isDisabled={true}>
        <TextField label="Nom" />
        <TextField label="Prenom" />
      </TextFieldsGroup>

      <Select label="Animaux favoris" options={['Chat', 'Chien', 'Kangourou']} />
    </>
  )
}

export default App
