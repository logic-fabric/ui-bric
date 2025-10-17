import { Button as RAButton, Label as RALabel, ListBox as RAListBox, ListBoxItem as RAListBoxItem, Popover as RAPopover, Select as RASelect, SelectValue as RASelectValue } from 'react-aria-components'

import { styled } from 'styled-components'

import { buttonStyles } from '../atoms/atomsStyles'

type SelectProps = {
    label: string,
    options: string[]
}

export function Select({ label, options }: SelectProps) {
    return (
        <StyledSelect>
            <RALabel>{label}</RALabel>

            <StyledButton>
                <RASelectValue />
                <span aria-hidden="true">▼</span>
            </StyledButton>

            <RAPopover>
                <RAListBox>
                    {options.map((option) => (
                        <StyledListBoxItem key={option}>{option}</StyledListBoxItem>
                    ))}
                </RAListBox>
            </RAPopover>
        </StyledSelect>
    )
}

const StyledSelect = styled(RASelect)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const StyledButton = styled(RAButton)`
    ${buttonStyles}
`

const StyledListBoxItem = styled(RAListBoxItem)`
  padding: 0.3em 1.2em
`
