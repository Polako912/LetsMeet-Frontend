import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import './SideNav.css';

class SideNav extends Component {
  render() {
    return (
      <div className="row">
<div className="col-md-3">
<div className="sidenav">
            <div className="avi-wrapper">
              <Paper className="avi-border" circle/>
              <img src={'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599'} className="avatar" alt="avatar"/>
            </div>
            <div className="nav-wrapper">
              <p className="initial">S<span         className="name">ULAIMAN</span></p>  
              <p className="initial">S<span className="name">ANAULLAH</span></p>
              <Divider/>
            </div>
        </div>
</div>
<div className="col-md-9">
      </div>
</div>
    );
  }
}
export default SideNav;