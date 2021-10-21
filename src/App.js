import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import {BrowserRouter , Route,Switch} from 'react-router-dom'
import PlanLayout from './pages/Layout/PlanLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layout/AppLayout';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
    <Route exact path={["/","/invite","/code_confirm","/allow_notification"]} >
    <PlanLayout>
      <Switch>
     <Route exact path= '/' component ={Welcome}/>
     <Route exact path ='/invite' component ={PhoneConfirmation}/>
     <Route exact path='/code_confirm' component = {CodeConfirm} />
     <Route exact path ='/allow_notification' component={AllowNotification}/>
     </Switch>
    </PlanLayout>
    </Route>
    <Route exact path={['/home']}>
      <AppLayout>
        <Switch>
          <Route exact path= '/home' component={()=><Home/>}/>

        </Switch>
      </AppLayout>
    </Route>
    </BrowserRouter>
  );
}

export default App;
