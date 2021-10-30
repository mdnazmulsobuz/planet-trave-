import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManagePackage from './components/ManagePackage/ManagePackage';
import MyOrder from './components/MyOrder/MyOrder';
import NotFound from './components/NotFound/NotFound';
import OurPackage from './components/OurPackage/OurPackage';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
          <PrivateRoute  path='/addpackage'>
            <AddPackage></AddPackage>
          </PrivateRoute>
          <PrivateRoute  path='/managepackage'>
            <ManagePackage></ManagePackage>
          </PrivateRoute>
          <PrivateRoute  path='/myorder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
