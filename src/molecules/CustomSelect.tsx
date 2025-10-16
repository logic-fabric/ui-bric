import { Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components'

import { CustomButton } from '../atoms/CustomButton'

import { styled } from 'styled-components'

type SelectProps = {
    label: string,
    options: string[]
}

export function CustomSelect({ label, options }: SelectProps) {
    return (
        <StyledSelect>
            <Label>{label}</Label>

            <CustomButton>
                <SelectValue />
                <span aria-hidden="true">▼</span>
            </CustomButton>

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

const StyledListBoxItem = styled(ListBoxItem)`
  padding: 0.3em 1.2em
`
