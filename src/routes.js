import React, {} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutHorde from './pages/AboutHorde';
import AboutAlliance from './pages/AboutAlliance';
import OrcPage from './pages/OrcPage';
import TaurenPage from './pages/TaurenPage';
import TrollPage from './pages/TrollPage';
import ForsakenPage from './pages/ForsakenPage';
import BloodElvesPage from './pages/BloodElvesPage';
import GoblinPage from './pages/GoblinPage';
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
                    <Route path="/about/tauren" component={TaurenPage} />
                    <Route path="/about/troll" component={TrollPage} />
                    <Route path="/about/forsaken" component={ForsakenPage} />
                    <Route path="/about/blood_elf" component={BloodElvesPage} />
                    <Route path="/about/goblin" component={GoblinPage} />
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;