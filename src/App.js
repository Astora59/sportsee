import logo from './logo.svg';
import './App.css';
import {Routes, Route, RouterProvider} from "react-router-dom"
import { RoutesSite } from './Router';
import router from './Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
  </div>
  );
}

export default App;
