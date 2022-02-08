import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Alarm, Heart, People, PeopleFill} from "react-bootstrap-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from './Car/Car'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <container>
          <Row>
              <Col xs="auto"><button class="btn btn-primary box-button" onClick={Car}><People />Sign in</button></Col>
              <Col xs="auto"><button class="btn btn-success" ><PeopleFill />Sign up</button></Col>
          </Row>
          </container>

      </header>
    </div>
  );
}

export default App;
