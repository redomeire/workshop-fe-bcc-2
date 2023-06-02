const reducer = (state, action) => {
    switch(action.type) {
        case 'add_to_cart':
            return [
                ...state, 
                action.value
            ]

        case 'remove_from_cart':
            let newArray = [...state];
            const index = newArray.findIndex((data) => data.id === action.id )

            newArray.splice(index, 1);

            return newArray
        default:
            console.log("action not found")
    }
}

export { reducer }
