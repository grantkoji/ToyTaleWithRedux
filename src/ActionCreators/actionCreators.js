let renderToys = (toys) => ({type: 'RENDER_TOYS', payload: {value: toys}})
let addToy = (toy) => ({type: 'ADD_TOY', payload: {value: toy}})
let removeToy = (toyId) => ({type: 'REMOVE_TOY', payload: {value: toyId}})
let addLike = (toyId) => ({type: 'ADD_LIKE', payload: {value: toyId}})

export {
    renderToys,
    addToy,
    removeToy,
    addLike
}
