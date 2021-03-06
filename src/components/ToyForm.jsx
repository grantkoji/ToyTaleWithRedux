import React, { Component } from 'react';
import * as beef from '../ActionCreators/actionCreators'
import {connect} from 'react-redux'

const initialState={
  name: '',
  image: ''
}
class ToyForm extends Component {
  state=initialState

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ 
        name: this.state.name,
        image: this.state.image,
        likes: 0
       })
    })
    .then(res=>res.json())
    .then(newToy => {
      this.props.addToy(newToy)
      this.setState(initialState)
    })
  }
  
  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.handleInputChange}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.handleInputChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
      addToy: (toy) => dispatch(beef.addToy(toy))
  }
}

export default connect(null, mapDispatchToProps)(ToyForm);
//can just import an action 
// mapDispatchToProps?
// export default connect(mapStateToProps, mapDispatchToProps)(ToyForm);
// export default connect(mapStateToProps)(ToyForm);


























// import React, { Component } from 'react';
// import * as action from '../ActionCreators/actionCreators'
// import {connect} from 'react-redux'

// const initialState={
//   name: '',
//   image: ''
// }
// class ToyForm extends Component {
//   state=initialState

//   handleInputChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value })
//   }
  
//   handleSubmit = (event) => {
//     event.preventDefault()
//     fetch('http://localhost:3000/toys', {
//       method: 'POST',
//       headers: {
//         "Content-Type": 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify({ 
//         name: this.state.name,
//         image: this.state.image,
//         likes: 0
//        })
//     })
//     .then(res=>res.json())
//     .then(newToy => {
//       this.props.addToy(newToy)
//       this.setState(initialState)
//     })
//   }
  
//   render() {
//     return (
//       <div className="container">
//         <form className="add-toy-form" onSubmit={this.handleSubmit}>
//           <h3>Create a toy!</h3>
//           <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.handleInputChange}/>
//           <br/>
//           <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.handleInputChange}/>
//           <br/>
//           <input type="submit" name="submit" value="Create New Toy" className="submit"/>
//         </form>
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
//       addToy: (toy) => dispatch(action.addToy(toy))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ToyForm);


























// import React, { Component } from 'react';
// import * as action from '../ActionCreators/actionCreators'
// import {connect} from 'react-redux'

// const initialState={
//   name: '',
//   image: ''
// }
// class ToyForm extends Component {
//   state=initialState

//   handleInputChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value })
//   }
  
//   handleSubmit = (event) => {
//     event.preventDefault()
//     fetch('http://localhost:3000/toys', {
//       method: 'POST',
//       headers: {
//         "Content-Type": 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify({ 
//         name: this.state.name,
//         image: this.state.image,
//         likes: 0
//        })
//     })
//     .then(res=>res.json())
//     .then(newToy => {
//       this.props.addToy(newToy)
//       this.setState(initialState)
//     })
//   }
  
//   render() {
//     return (
//       <div className="container">
//         <form className="add-toy-form" onSubmit={this.handleSubmit}>
//           <h3>Create a toy!</h3>
//           <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.handleInputChange}/>
//           <br/>
//           <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.handleInputChange}/>
//           <br/>
//           <input type="submit" name="submit" value="Create New Toy" className="submit"/>
//         </form>
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
//       addToy: (toy) => dispatch(action.addToy(toy))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ToyForm);
