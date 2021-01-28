import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutHorde from './pages/AboutHorde';
import AboutAlliance from './pages/AboutAlliance';
import Header from './components/Header';
import HordeLogo from './assets/logo-horde.png';
import AllianceLogo from './assets/logo-alliance.png';
import RolesPage from './pages/Roles';
import Races from './pages/Races';
import RacesAlliance from './pages/RacesAlliance';

const Routes = () => {
    const[layoutPage, setLayoutPage] = useState('')

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <React.Fragment>
                    <Header hordeLogo={HordeLogo} allianceLogo={AllianceLogo} layoutPage={layoutPage} />
                    <div>
                        <Route path="/about/horde" render={(props) => <AboutHorde layoutPage={setLayoutPage} />} />
                        <Route path="/about/alliance" render={(props) => <AboutAlliance layoutPage={setLayoutPage} />} />
                        <Route path="/about/races" render={(props) => <Races />} />
                        <Route path="/about/races/alliance" render={(props) => <RacesAlliance />} />
                        <Route path="/about/class" render={(props) => <RolesPage />} />
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;