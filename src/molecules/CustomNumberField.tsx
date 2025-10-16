import { useRef } from "react"
import { useLocale, useNumberField } from "react-aria"
import { useNumberFieldState } from "react-stately"

import { CustomButton } from "../atoms/CustomButton"

import styled from "styled-components"

type NumberFieldProps = Parameters<typeof useNumberField>[0] & {
    label: string,
}

export function CustomNumberField({ label, ...props }: NumberFieldProps) {
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
            <label {...labelProps}>{label}</label>

            <StyledInputContainer {...groupProps}>
                <CustomButton {...decrementButtonProps}>-</CustomButton>

                <input {...inputProps} ref={inputRef} />

                <CustomButton {...incrementButtonProps}>+</CustomButton>
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