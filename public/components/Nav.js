var React = require('react');
var Link = require('react-router-dom').Link;

class Nav extends React.Component {

  render() {
    return (
      <div className="view view-color navbar navbar-inverse">
<div className="position-title">Progress</div>
        <div className="container-fluid ">
          <div className="navbar-header ">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="">
              <a className="centerLi navbar-brand" href="/"><img alt="Brand" className="size-img" src="./images/progress.png"/></a>
            </div>

          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Sign up</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span className="icon-color glyphicon glyphicon-user"></span>
                  <span className="icon-color caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Invite Friends</a>
                  </li>
                  <li>
                    <a href="#">
                    <div className="two-side">
                      <span>Settings</span>
                      <span className="glyphicon glyphicon-cog"></span>
                    </div>
                  </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li >
                    <a href="#">
                      <div className="two-side">
                        <span>Log Out</span>
                        <span className="glyphicon glyphicon-off"></span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span className="icon-color 	glyphicon glyphicon-question-sign"></span>
                  <span className="icon-color caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="#">Info</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = Nav;
