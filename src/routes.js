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
import WarriorPage from './pages/WarriorPage';
import WarlockPage from './pages/WarlockPage';
import PaladinPage from './pages/PaladinPage';
import HunterPage from './pages/HunterPage';
import RoguePage from './pages/RoguePage';
import PriestPage from './pages/PriestPage';
import MonkPage from './pages/MonkPage';
import ShamanPage from './pages/ShamanPage';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <div>
					<Header hordeLogo={HordeLogo} allianceLogo={AllianceLogo} />
                    <div>
                        <Route path="/about/horde" render={(props) => <AboutHorde />} />
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
                        <Route path="/about/warrior" component={WarriorPage} />
                        <Route path="/about/warlock" component={WarlockPage} />
                        <Route path="/about/paladin" component={PaladinPage} />
                        <Route path="/about/hunter" component={HunterPage} />
                        <Route path="/about/rogue" component={RoguePage} />
                        <Route path="/about/priest" component={PriestPage} />
                        <Route path="/about/shaman" component={ShamanPage} />
                        <Route path="/about/monk" component={MonkPage} />
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;