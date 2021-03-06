//import './App.css';

import './project.css';

import React from 'react';

import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">
              <div id="wrapper">
          <header>
          <h1> <>
           <Router>
              <navbar />
              <Switch>
                <Route path='/' />
                <Route path='/reports' component={Home} />
              </Switch>
            </Router>
          </></h1>
          
          </header>
          
          <nav>
         
          {/*
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="events.html">Events</a></li>
              <li><a href="membership.html">Membership</a></li>
              <li><a href="calendar.html">Calendar</a></li>
              <li><a href="template.html">About Us</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
  */}
          </nav>
          <main>
          <div id="heroroad">
          </div>

          <h2> Daily Food </h2>
          <p>

          <h3>Food Hub</h3>
          </p>

          </main>

          <footer>
              Copyright &copy; 2022 Capstone<br />
              <script type="text/javascript">
                          showEM("alegna","moc.lpm");
                </script>
          <h3>This page was last modified on:
          <script>
          document.write(document.lastModified);

          </script>
          </h3>

          </footer>



          </div>




    </div>
  );
}

export default App;
