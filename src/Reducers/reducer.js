const initialState = {
    toys: []
}

const reducer = (prevState=initialState, action) => {
    let newToys
    switch(action.type) {
        case 'RENDER_TOYS':
            //to save array of toys
            return {...prevState, toys: action.payload.value}
        case 'ADD_LIKE':
            //TO ADD A LIKE TO A TOY
        //action.payload.id = toyId
        newToys = prevState.toys.map(toy => {
                if (toy.id === action.payload.id) {
                    toy.likes = toy.likes + 1
                    return toy
                } else {
                    return toy
                }
            }
        )
            return {...prevState, toys: newToys}
        case 'DELETE_TOY':
         //action.payload.value = toyId
         newToys = prevState.toys.filter(toy => toy.id !== action.payload.value)
            return {...prevState, toys: newToys}
        case "ADD_TOY": 
            //action.payload.value = newInstanceOfToy
            return {...prevState, toys: [...prevState.toys, action.payload.value]}
        default: 
            return prevState
    }
}






// let addLike = (toyId) => ({type: 'ADD_LIKE', payload: {id: toyId}})

// const mapDispatchToProps = dispatch => {
//     return {
//         addLike: (toyId) => dispatch(action.addLike(toyId)),
//         donateToy: (toyId) => dispatch(action.donateToy(toyId))
//     }
// }



export default reducer
































// import toyData from "../data"

// const initialState = {
//     toys: []

// }



// const reducer = (prevState=initialState, action) => {
//     switch(action.type) {
//         case 'RENDER_TOYS':
//             return {...prevState, toys: action.payload.value};
//         case 'ADD_TOY': 
//             return {...prevState, toys: [...prevState.toys, action.payload.value]};
//         case 'REMOVE_TOY': 
//             let newToys = prevState.toys.filter(toy => toy.id !== action.payload.value)
//             return {...prevState, toys: newToys};
//         case 'ADD_LIKE':
//             let likeToys = prevState.toys.map(toy => {
//                 if (toy.id === action.payload.value) {
//                     toy.likes = parseInt(toy.likes) + 1
//                     return toy
//                 }
//                 return toy
//             })
//             return {...prevState, toys: likeToys}
//         default: 
//             return prevState
//     }

// }


// export default reducer
