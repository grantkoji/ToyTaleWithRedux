let renderToys = (toys) => ({type: 'RENDER_TOYS', payload: {value: toys}})
let addLike = (toyId) => ({type: 'ADD_LIKE', payload: {id: toyId}})
let donateToy = (toyId) => ({type: 'DELETE_TOY', payload: {value: toyId}})
let addToy = (toy) => ({type: "ADD_TOY", payload: {value: toy}})

export {
    renderToys,
    addLike,
    donateToy,
    addToy
}





















































// let renderToys = (toys) => ({type: 'RENDER_TOYS', payload: {value: toys}})
// let addToy = (toy) => ({type: 'ADD_TOY', payload: {value: toy}})
// let removeToy = (toyId) => ({type: 'REMOVE_TOY', payload: {value: toyId}})
// let addLike = (toyId) => ({type: 'ADD_LIKE', payload: {value: toyId}})

// export {
//     renderToys,
//     addToy,
//     removeToy,
//     addLike
// }


