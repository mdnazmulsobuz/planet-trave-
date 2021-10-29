import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManagePackage from './components/ManagePackage/ManagePackage';
import MyOrder from './components/MyOrder/MyOrder';
import NotFound from './components/NotFound/NotFound';
import OurPackage from './components/OurPackage/OurPackage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/package'>
            <OurPackage></OurPackage>
          </Route>
          <Route  path='/managepackage'>
            <ManagePackage></ManagePackage>
          </Route>
          <Route  path='/addpackage'>
            <AddPackage></AddPackage>
          </Route>
          <Route  path='/myorder'>
            <MyOrder></MyOrder>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
