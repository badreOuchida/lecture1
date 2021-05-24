
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './componments/Navbar'
import Footer from './componments/Footer'

import Home from './pages/Home'
import Contact from './pages/Contact'

import Properties from './pages/Properties'

import SingleProperties from './pages/SingleProperties'
import PropertiesSearch from './pages/PropertiesSearch'
import PropertiesFilter from './pages/PropertiesFilter'
import SingleBlog from './pages/SingleBlog'

import Blogs from './pages/Blogs'



const NotFoundPage = () =>{
  return (
    <h1>Not found page</h1>
    )
}


function App() {
  return (
    <>
      <Router>
        <Navbar />  
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/properties/page/:id' component={Properties} />
          <Route exact path='/properties/search/:world' component={PropertiesSearch} />
          <Route exact path='/properties/filter/:world' component={PropertiesFilter} />
          <Route exact path='/propertie/:id' component={SingleProperties} />
          <Route exact path='/blog/:id' component={SingleBlog} />
          <Route exact path='/blogs/page/:id' component={Blogs} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFoundPage} />
          {/* <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
