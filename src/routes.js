import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutHorde from './pages/AboutHorde';
import AboutAlliance from './pages/AboutAlliance';
import Header from './components/Header';
import HordeLogo from './assets/logo-horde.png';
import AllianceLogo from './assets/logo-alliance.png';
import RolesPage from './pages/Roles';
import RacesHorde from './pages/RacesHorde';
import RacesAlliance from './pages/RacesAlliance';

const Routes = () => {
    const[headerLayout, setHeaderLayout] = useState('')

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <React.Fragment>
                    <Header hordeLogo={HordeLogo} allianceLogo={AllianceLogo} headerLayout={headerLayout} />
                    <div>
                        <Route path="/about/horde" render={(props) => <AboutHorde headerLayout={setHeaderLayout} />} />
                        <Route path="/about/alliance" render={(props) => <AboutAlliance headerLayout={setHeaderLayout} />} />
                        <Route path="/about/races/horde" render={(props) => <RacesHorde />} />
                        <Route path="/about/races/alliance" render={(props) => <RacesAlliance />} />
                        <Route path="/about/class" render={(props) => <RolesPage />} />
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;