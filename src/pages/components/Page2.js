import React from 'react';

class Page2 extends React.Component {
  render() {
    let mystyle = {
      width: '100%',
      height: '80px',
      backgroundColor: 'greenyellow',
      fontSize: '24px',
      textAlign: 'center',
      lineHeight: '80px'
    };
    return (
      <div style={mystyle}>
        This is Page 222222!
      </div>
    );
  }
}

export default Page2;
