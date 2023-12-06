import { useState } from 'react'

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange =({target}) =>{
        setInputValue(target.value)
    }
    const onSubmit = (event) =>{

        // setCategories(categories => [inputValue, ...categories])
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewValue(inputValue.trim())
        setInputValue('')
        
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

