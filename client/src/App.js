import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/Land';
import Home from './components/Home';
function App() {
    return (
    <BrowserRouter>
        <div className="App">
			<Switch>
				<Route exact path='/' component={LandingPage}/>
				<Route path='/' component={Home}/>
			</Switch>
            <h1>Henry Dogs</h1>
        </div>
    </BrowserRouter>
    );
}

export default App;
