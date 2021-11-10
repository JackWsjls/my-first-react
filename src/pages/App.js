import './App.css';
import React from 'react';
// 路由使用 history模式
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 路由采用 hash模式
// import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import NotFound from './components/404';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Page1/:name" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path='/*' element={<NotFound />} />
          {/* <Redirect from='*' to='/404' />
          <Redirect to="/" /> */}
        </Routes>
      </Router>
    )
  }
}

export default App;
