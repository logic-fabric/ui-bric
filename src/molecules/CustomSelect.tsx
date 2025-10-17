import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components'

import { styled } from 'styled-components'

type SelectProps = {
    label: string,
    options: string[]
}

export function CustomSelect({ label, options }: SelectProps) {
    return (
        <StyledSelect>
            <Label>{label}</Label>

            <StyledButton>
                <SelectValue />
                <span aria-hidden="true">▼</span>
            </StyledButton>

            <Popover>
                <ListBox>
                    {options.map((option) => (
                        <StyledListBoxItem key={option}>{option}</StyledListBoxItem>
                    ))}
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

const StyledButton = styled(Button)`
    display: flex;
    gap: 1em;

    width: fit-content;
    padding: 0.5em 1em;
    border-radius: 4px;

    background-color: #eee;
    cursor: pointer;
`

const StyledListBoxItem = styled(ListBoxItem)`
  padding: 0.3em 1.2em
`
