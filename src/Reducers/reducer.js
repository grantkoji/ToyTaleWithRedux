import toyData from "../data"

const initialState = {
    toys: []

}

const reducer = (prevState=initialState, action) => {
    switch(action.type) {
        case 'RENDER_TOYS':
            return {...prevState, toys: action.payload.value};
        case 'ADD_TOY': 
            return {...prevState, toys: [...prevState.toys, action.payload.value]};
        case 'REMOVE_TOY': 
            let newToys = prevState.toys.filter(toy => toy.id !== action.payload.value)
            return {...prevState, toys: newToys};
        case 'ADD_LIKE':
            let likeToys = prevState.toys.map(toy => {
                if (toy.id === action.payload.value) {
                    toy.likes = parseInt(toy.likes) + 1
                    return toy
                }
                return toy
            })
            return {...prevState, toys: likeToys}
        default: 
            return prevState
    }

}


export default reducer

