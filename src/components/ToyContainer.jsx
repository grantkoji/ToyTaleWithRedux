import React from 'react';
import ToyCard from './ToyCard'

//these two lines always imported
import * as act from '../ActionCreators/actionCreators'
import {connect} from 'react-redux'
class ToyContainer extends React.Component {

  componentDidMount(){
    this.fetchToys()
  }

  fetchToys = () => {
    fetch('http://localhost:3000/toys')
    .then(res=>res.json())
    .then(toyData => this.props.renderToys(toyData)
    )    
  }



  render(){
    // const {toys} = this.props
    return(
      <div id="toy-collection">
         {this.props.toys.map(toy => <ToyCard key={toy.id} {...toy}/>)}
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        toys: state.toys
    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderToys: (toys) => dispatch(act.renderToys(toys))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToyContainer);






























// import React from 'react';
// import ToyCard from './ToyCard'
// import * as action from '../ActionCreators/actionCreators'
// import {connect} from 'react-redux'

// class ToyContainer extends React.Component {

//   componentDidMount(){
//     this.fetchToys()
//   }

//   fetchToys = () => {
//     fetch(' http://localhost:3000/toys')
//     .then(res=>res.json())
//     .then(toyData => this.props.renderToys(toyData))
//   }
//   render(){
//     const {toys} = this.props
//     return(
//       <div id="toy-collection">
//         {toys.map(toy => <ToyCard key={toy.id} {...toy}/>)}
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
//       renderToys: (toys) => dispatch(action.renderToys(toys))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ToyContainer);


// import React from 'react';
// import ToyCard from './ToyCard'

// const ToyContainer = (props) => {
//   const {toys} = props
//   return(
//     <div id="toy-collection">
//       {toys.map(toy => <ToyCard key={toy.id} {...toy} addLike={props.addLike} removeToy={props.removeToy}/>)}
//     </div>
//   );
// }

// export default ToyContainer;
