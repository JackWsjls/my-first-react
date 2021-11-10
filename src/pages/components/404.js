import { Component } from 'react';

export default class NotFound extends Component {

  componentDidMount() {
    // alert('404 NOT FOUND');
    // this.context.router.replace('/')
  }

  render() {
    // 非实体组件需显式返回 null
    return null
  }
}

// import React from 'react';

// class NotFound extends React.Component {
//   render() {
//     let mystyle = {
//       width: '100%',
//       height: '80px',
//       backgroundColor: 'pink',
//       fontSize: '24px',
//       textAlign: 'center',
//       lineHeight: '80px'
//     };
//     console.log(this, this.props);
//     return (
//       <div style={mystyle}>
//         This is Page NotFound!
//       </div>
//     );
//   }
// }

// export default NotFound;
