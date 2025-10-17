import {
    Input as RAInput,
    Label as RALabel,
    TextField as RATextField,
} from "react-aria-components"

import styled from "styled-components"

type TextFieldProps = {
    label: string
}

export function TextField({label}: TextFieldProps) {
    return (
        <StyledTextField>
            <RALabel>{label}</RALabel>

            <RAInput />
        </StyledTextField>
    )
}

const StyledTextField = styled(RATextField)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25em;
`