import { useState } from 'react'

export const useLocalStorage = ({ key, initialValue }) => {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key)
    return storedValue === null ? initialValue : JSON.parse(storedValue)
  })

  const updateValue = (newOrFn) => {
    setValue(
      typeof newOrFn === 'function'
        ? value => newOrFn(value)
        : newOrFn
    )
  }

  return [value, updateValue]
}
