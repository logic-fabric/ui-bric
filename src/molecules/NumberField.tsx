import { useRef } from "react"
import { useLocale, useNumberField } from "react-aria"
import { useNumberFieldState } from "react-stately"

import { Button } from "../atoms/Button"

import styled from "styled-components"

type NumberFieldProps = Parameters<typeof useNumberField>[0]

export function NumberField(props: NumberFieldProps) {
    const inputRef = useRef(null)
    const { locale } = useLocale()
    const state = useNumberFieldState({
        ...props,
        locale
    })
    const {
        labelProps,
        groupProps,
        inputProps,
        incrementButtonProps,
        decrementButtonProps
    } = useNumberField(props, state, inputRef)

    return (
        <StyledNumberFieldContainer>
            <label {...labelProps} >{props.label}</label>

            <StyledInputContainer {...groupProps}>
                <Button {...decrementButtonProps}>-</Button>

                <input {...inputProps} ref={inputRef} />

                <Button {...incrementButtonProps}>+</Button>
            </StyledInputContainer>
        </StyledNumberFieldContainer>
    )
}

const StyledNumberFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25em;
`

const StyledInputContainer = styled.div`
    display: flex;
    gap: 0.25em;
`