import { 
    add_to_cart, 
    remove_all_item_by_id, 
    remove_from_cart 
} from "./dispatcher"

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_to_cart':
            return add_to_cart(state, action.value)
        case 'remove_from_cart':
            return remove_from_cart(state, action.id)
        case 'remove_all_item_by_id':
            return remove_all_item_by_id(state, action.id)
        default:
            console.log("action not found")
    }
}

export { reducer }
