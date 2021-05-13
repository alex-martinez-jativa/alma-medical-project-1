import { Switch, Route } from 'react-router-dom';
import PatientsList from './pages/PatientsList';
import CreatePatient from './pages/CreatePatient';

const App = () => {
    
    return (
        <Switch>
            <Route exact path="/" render={PatientsList}/>
            <Route path="/patient-list" render={PatientsList} />
            <Route path="/create-patient" render={CreatePatient} />
        </Switch>
    );
}

export default App;