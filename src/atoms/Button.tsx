import { useRef } from 'react'
import { useButton } from 'react-aria'
import type { ButtonProps as RAButtonProps} from 'react-aria-components'

import styled from 'styled-components'

type ButtonProps = RAButtonProps & {
    children: React.ReactNode
}

export function Button(props: ButtonProps) {
    const ref = useRef(null)
    const { buttonProps, isPressed } = useButton(props, ref)

    return (
        <StyledButton {...buttonProps} ref={ref} $isPressed={isPressed}>
            {props.children}
        </StyledButton>
    )
}

const StyledButton = styled.button<{ $isPressed: boolean }>`
    display: flex;
    gap: 1em;

    width: fit-content;
    padding: 0.5em 1em;
    border-radius: 4px;

    background-color: ${({ $isPressed }) => $isPressed ? "#ccc" : "#eee"};
    cursor: pointer;
`
