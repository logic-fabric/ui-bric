import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components'

import './App.css'

function App() {
  return (
    <Select>
      <Label>Animaux favoris</Label>

      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>

      <Popover>
        <ListBox>
          <ListBoxItem>Chat</ListBoxItem>
          <ListBoxItem>Chien</ListBoxItem>
          <ListBoxItem>Kangourou</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  )
}

export default App
