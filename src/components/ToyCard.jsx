import React, { Component } from 'react';
//import these two lines always
import * as action from '../ActionCreators/actionCreators'
import {connect} from 'react-redux'

class ToyCard extends Component {

  clickLike = () => {
    const { likes, id } = this.props
    let updatedLikes = parseInt(likes) + 1
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ likes: updatedLikes })
    })
    .then(res=>res.json())
    .then(toyData => {
      this.props.addLike(id)
    })
  }

  clickDonateToy = () => {
    const {id, donateToy} = this.props
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      }
    })
    .then(data => donateToy(id)
    )
  }

 
  
  render() {
    const {name, image, likes, id} = this.props
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.clickLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.clickDonateToy }>Donate to GoodWill</button>
      </div>
    );
  }

}



const mapDispatchToProps = dispatch => {
    return {
        addLike: (toyId) => dispatch(action.addLike(toyId)),
        donateToy: (toyId) => dispatch(action.donateToy(toyId))
    }
}


export default connect(null, mapDispatchToProps)(ToyCard)





// import React, { Component } from 'react';
// import * as action from '../ActionCreators/actionCreators'
// import {connect} from 'react-redux'

// class ToyCard extends Component {



//   clickLike = () => {
//     const { likes, id, addLike } = this.props
//     let updatedLikes = parseInt(likes) + 1
//     fetch(`http://localhost:3000/toys/${id}`, {
//       method: 'PATCH',
//       headers: {
//         "Content-Type": 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify({ likes: updatedLikes })
//     })
//     .then(res=>res.json())
//     .then(toyData => {
//       addLike(toyData.id)
//     })
//   }

//   donateToy = () => {
//     const {id, removeToy} = this.props
//     fetch(`http://localhost:3000/toys/${id}`, {
//       method: 'DELETE',
//       headers: {
//         "Content-Type": 'application/json',
//         Accept: 'application/json'
//       }
//     })
//     .then(data => removeToy(this.props.id))
//   }

 
  
//   render() {
//     const {name, image, likes, id} = this.props
//     return (
//       <div className="card">
//         <h2>{name}</h2>
//         <img src={image} alt={name} className="toy-avatar" />
//         <p>{likes} Likes </p>
//         <button className="like-btn" onClick={this.clickLike}>Like {'<3'}</button>
//         <button className="del-btn" onClick={this.donateToy}>Donate to GoodWill</button>
//       </div>
//     );
//   }

// }


// const mapStateToProps = state => {
//   return {
//       toys: state.toys
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//       removeToy: (toyId) => dispatch(action.removeToy(toyId)),
//       addLike: (toyId) => dispatch(action.addLike(toyId))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ToyCard);





