const add_to_cart = (state, cartItem) => {
    /**
     *   change [{ id: 1 }, ...]
     *   to [
     *       {id: 1, count: 2},
     *       {id: 3, count: 4},
     *     ]
     */

    let index = state.findIndex((data) => {
        return data.id === cartItem.id
    })

    const newArray = [...state]

    if (index === -1)
        newArray.push({ count: 1, ...cartItem })
    else {
        newArray[index].count += 1
    }

    return newArray
}

const remove_from_cart = (state, id) => {
    let index = state.findIndex((data) => data.id === id)

    if(index === -1) return

    let newArray = [...state]

    if(newArray[index].count > 1)
        newArray[index].count -= 1
    else 
        newArray.splice(index, 1)

    return newArray
}

const remove_all_item_by_id = (state, id) => {
    let index = state.findIndex((data) => data.id === id)

    if(index === -1) return

    let newArray = [...state]

    newArray.splice(index, 1)

    return newArray
}

export { 
    add_to_cart,
    remove_from_cart,
    remove_all_item_by_id
}
