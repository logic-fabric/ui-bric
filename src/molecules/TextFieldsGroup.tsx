import { TextFieldContext as RATextFieldContext } from "react-aria-components";

type TextFieldsGroupProps = {
    children?: React.ReactNode,
    isDisabled?: boolean
}

export function TextFieldsGroup({ children, isDisabled }: TextFieldsGroupProps) {
    return (
        <RATextFieldContext.Provider value={{isDisabled}}>
            {children}
        </RATextFieldContext.Provider>
    )
}