import { useState } from 'react'
import { AddCategory,GifGrid } from './components'

export const GifApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (onNewValue) =>{

      if(categories.includes(onNewValue)) return
       setCategories([ onNewValue, ...categories])
    }

  return (
    <>
      <h1>GiftApp</h1>

      <AddCategory 
        onNewValue ={onAddCategory}
      />
      {
        categories.map(category => ( <GifGrid 
          key={category} 
          category={category}
        />))
      }

    </>
  )
}


