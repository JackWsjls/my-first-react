#### create-react-app初始化后，在React中加路由
```
npm install --save react-router-dom 
```
当前最新的react-router-dom版本
```
"react-router-dom": "6.0.2",
```
#### 修改App.js代码
```
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

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Page1/:name" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
```
#### 建components文件夹放主要的页面
home.js
```
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
        <Link to="/Page3">
          <div>点击跳转到Page3</div>
        </Link>
      </div>
    );
  }
}

export default Home;
```
建三个页面Page1、Page2、Page3，以Page1为例，做适当修改做区分
```
import React from 'react';

class Page1 extends React.Component {
  render() {
    let mystyle = {
      width: '100%',
      height: '80px',
      backgroundColor: 'pink',
      fontSize: '24px',
      textAlign: 'center',
      lineHeight: '80px'
    };
    console.log(this, this.props);
    return (
      <div style={mystyle}>
        This is Page 111111!
      </div>
    );
  }
}

export default Page1;
```
完毕。

参考链接：
https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-all-switch-elements-to-routes

注意 react-router-dom v6和v6之前的区别
```
// v4 and v5 before 5.1
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route
        path="/users/:id"
        render={({ match }) => (
          <User id={match.params.id} />
        )}
      />
    </Switch>
  );
}
// This is a React Router v6 app
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
```