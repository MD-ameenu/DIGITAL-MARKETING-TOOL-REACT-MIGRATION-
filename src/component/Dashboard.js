import React from "react";
import {Link} from 'react-router-dom';
import './Dashboard.css';
import Left from './User-Dasboard/User-dasbord1'
import Middle from './User-Dasboard/User-dasboard2'
import Right from './User-Dasboard/User-dahboard3'
import {HashRouter as Router,Route, Switch} from 'react-router-dom';
import savedlp from '../component/User-Dasboard/viewlandingeditor'
import createet from '../component/createemailTep/createemailTemp1'


export default function Dashboard() {
    return (
        
  <div style={{height:"100vh"}}>
  <div className="d-flex" style={{height: "100%"}}>
    
        <Left/>
        <Router>
        <Switch>
        <Route exact path="/dashboard/" component= {Middle }/>
        <Route exact path="/dashboard/savedlp" component= {savedlp}/>
        <Route exact path="/dashboard/createet" component= {createet}/>

        </Switch>
        </Router>
        <Right/>

  </div>
</div>
// </div>
    )
}