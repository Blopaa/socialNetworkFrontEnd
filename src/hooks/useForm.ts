import { useState } from "react"

const useForm = (initialState: {}) => {
    const [inputValue, setInputValue] = useState(initialState)

    const handleInputChange = ({target}) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        })
    }

    return {
        handleInputChange: handleInputChange,
        value: inputValue
    }
}

export default useForm