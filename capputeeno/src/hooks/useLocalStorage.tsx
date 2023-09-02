import { useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState(initialValue); // caso o getItem() não retorne nada, atribui uma string vazia

    // esta função, além de modificar o estado com o novo valor passado, ela também atualiza o local storage
    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}