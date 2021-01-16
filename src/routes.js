import React, {useState, useEffect} from 'react';
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
import RolesPage from './pages/RolesPage';
import HordeLogo from './assets/logo-horde.png';
import AllianceLogo from './assets/logo-alliance.png';

const Routes = () => {
    const[roleSelected, setRoleSelected] = useState('');
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <div>
					<Header hordeLogo={HordeLogo} allianceLogo={AllianceLogo} />
                    <div>
                        <Route path="/about/horde" render={(props) => <AboutHorde selectRole={setRoleSelected} />} />
                        <Route path="/about/alliance" component={AboutAlliance} />
                    </div>
                    <div>
                        <Route path="/about/orc" component={OrcPage} />
                        <Route path="/about/tauren" component={TaurenPage} />
                        <Route path="/about/troll" component={TrollPage} />
                        <Route path="/about/forsaken" component={ForsakenPage} />
                        <Route path="/about/blood_elf" component={BloodElvesPage} />
                        <Route path="/about/goblin" component={GoblinPage} />
                    </div>
                    <div>
                        <Route path="/about/roles" render={(props) => <RolesPage role={roleSelected}  />} />
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;