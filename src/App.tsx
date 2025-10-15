import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components'
import { styled } from 'styled-components'

import './App.css'

function App() {
  return (
    <StyledSelect>
      <Label>Animaux favoris</Label>

      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>

      <Popover>
        <ListBox>
          <StyledListBoxItem>Chat</StyledListBoxItem>
          <StyledListBoxItem>Chien</StyledListBoxItem>
          <StyledListBoxItem>Kangourou</StyledListBoxItem>
        </ListBox>
      </Popover>
    </StyledSelect>
  )
}

const StyledSelect = styled(Select)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const StyledListBoxItem = styled(ListBoxItem)`
  padding: 0.3em 1.2em
`

export default App
