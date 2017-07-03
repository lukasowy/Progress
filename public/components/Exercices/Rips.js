var React = require('react');
var api = require('../../utils/api');
var ReactRouter = require('react-router-dom');
var AddRip = require('./AddRip');

function RipsList(props) {
  return (
    <div className="row">
      <div className="panel panel-primary col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 top-buffer">
        <div className="panel-heading titleExercice ">{props.rips.title}</div>
      </div>
      <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2">
        <AddRip id={props.id}/>
      </div>
        <TitleLine/>
      <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 top-buffer ">
        <ul className="exercices-list list-group">
          {props.rips.rips.map(function(rip, index) {
            return (
              <li key={rip._id} className="two-side rips centerLi exercices-item list-group-item">
                <div className="format-data">{rip.data.match(/\d{4}-\d{2}-\d{2}/)}</div>
                {rip.rip}
              <div className=" btn-group" role="group">
                <button type="button" className="btn btn-default  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="glyphicon glyphicon-option-vertical" aria-hidden="true"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href={props.id}>
                      <span>Edit</span>
                      <span className="bl glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => {
                      props.onDelete(props.id,rip._id)
                    }} href={props.id}>
                      <span>Delete</span>
                      <span className="bl glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </a>
                  </li>
                </ul>
              </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function BackButton(props){
  return(
    <div>
      <button onClick={props.onNavigateHome} className="btn btn-default previous margin-left-button-back">
        <span aria-hidden="true">&larr;</span>Back</button>
    </div>
  )
}

function TitleLine(props){
  return(
    <div className="top-buffer  col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2">
      <div className="title-line-description">
        <div>Data:</div>
        <div>Worst:</div>
        <div>Repetitio:</div>
        <div>Better:</div>
        <div>Option:</div>
      </div>
      <span className="title-line col-lg-12  col-sm-12 col-xs-12"></span>
    </div>
  )
}

class Rips extends React.Component {
  constructor(props) {
    super();
    this.state = {
      rips: null
    };
    this.onNavigateHome = this.onNavigateHome.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onNavigateHome() {
    this.props.history.push('/');
  }
  componentDidMount() {
    api.getRips(this.props.match.params.id).then(function(rips) {
      this.setState(function() {
        return {rips: rips}
      })
    }.bind(this));
  }
  onDelete(a,b) {
    console.log(a,b);
    api.deleteRip(a,b).then(function(rips) {
      this.setState(function() {
        return {rips: rips}
      })
    }.bind(this));
  }
  render() {
    return (
      <div>
        <BackButton onNavigateHome={this.onNavigateHome}/>
        {!this.state.rips
          ? <p></p>
          : <RipsList onDelete={this.onDelete} id={this.props.match.params.id} rips={this.state.rips}/>}

      </div>
    )
  }
}

module.exports = Rips;
