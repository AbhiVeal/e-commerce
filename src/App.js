// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import './styles.css'; // Import the styles

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
