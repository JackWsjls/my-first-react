import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>This is Home!</p>
        <Link to="/Page1/Monica">
          <div>点击跳转到Page1</div>
        </Link>
        <Link to="/Page2">
          <div>点击跳转到Page2</div>
        </Link>
        <Link to="/Video">
          <div>点击跳转到Video</div>
        </Link>
        <div className="triangle"></div>
      </div>
    );
  }
}

export default Home;
