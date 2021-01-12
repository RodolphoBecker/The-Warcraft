import React, {} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutHorde from './pages/AboutHorde';
import AboutAlliance from './pages/AboutAlliance';
import OrcPage from './pages/OrcPage';
import Header from './components/Header';
import HordeLogo from './assets/logo-horde.png';
import AllianceLogo from './assets/logo-alliance.png';

const Routes = () => {
    
    // const[ headerHeight, setHeaderHeight] = useState(null);
    // console.log(headerHeight);
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <div>
					<Header hordeLogo={HordeLogo} allianceLogo={AllianceLogo} />
                    <Route path="/about/horde" component={AboutHorde} />
                    <Route path="/about/alliance" component={AboutAlliance} />
                    <Route path="/about/orc" component={OrcPage} />
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;