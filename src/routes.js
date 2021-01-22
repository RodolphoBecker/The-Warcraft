import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutHorde from './pages/AboutHorde';
import AboutAlliance from './pages/AboutAlliance';
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
import MagePage from './pages/MagePage';
import DruidPage from './pages/DruidPage';
import DemonHunterPage from './pages/DemonHunterPage';
import DeathKnightPage from './pages/DeathKnightPage';

import Races from './pages/Races';

const Routes = () => {
    const[layoutPage, setLayoutPage] = useState('')
    const[raceSelected, setRaceSelected] = useState(null);
    const[raceName, setRaceName] = useState(null);

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <React.Fragment>
					    <Header hordeLogo={HordeLogo} allianceLogo={AllianceLogo} layoutPage={layoutPage} />
                        <div>
                            {/* Main-Pages */}
                            <Route path="/about/horde" render={(props) => <AboutHorde layoutPage={setLayoutPage} raceSelected={setRaceSelected} raceName={setRaceName}  />} />
                            <Route path="/about/alliance" render={(props) => <AboutAlliance layoutPage={setLayoutPage} />} />
                            {/* Horde-Race-Pages */}
                            <Route path="/about/forsaken" component={ForsakenPage} />
                            <Route path="/about/blood_elf" component={BloodElvesPage} />
                            <Route path="/about/goblin" component={GoblinPage} />
                            {/* Class-Pages */}
                            <Route path="/about/warrior" component={WarriorPage} />
                            <Route path="/about/warlock" component={WarlockPage} />
                            <Route path="/about/paladin" component={PaladinPage} />
                            <Route path="/about/hunter" component={HunterPage} />
                            <Route path="/about/rogue" component={RoguePage} />
                            <Route path="/about/priest" component={PriestPage} />
                            <Route path="/about/shaman" component={ShamanPage} />
                            <Route path="/about/monk" component={MonkPage} />
                            <Route path="/about/mage" component={MagePage} />
                            <Route path="/about/druid" component={DruidPage} />
                            <Route path="/about/demonHunter" component={DemonHunterPage} />
                            <Route path="/about/deathKnight" component={DeathKnightPage} />
                            {/* Teste-Page */}
                            <Route path="/about/races" render={(props) => <Races raceSelected={raceSelected}/>} /> 
                        </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;