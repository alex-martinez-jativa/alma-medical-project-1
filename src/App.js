import { Switch, Route } from 'react-router-dom';
import PatientsList from './pages/PatientsList';
import CreatePatient from './pages/CreatePatient';
import {ROOT_PATH, PATIENT_LIST_PATH, CREATE_PATIENT_PATH} from './constants';

const App = () => {
    
    return (
        <Switch>
            <Route exact path={ROOT_PATH} render={() => <PatientsList /> }/>
            <Route path={PATIENT_LIST_PATH} render={() => <PatientsList />} />
            <Route path={CREATE_PATIENT_PATH} render={() => <CreatePatient />} />
        </Switch>
    );
}

export default App;