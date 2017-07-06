var React = require('react');
var api = require('../../utils/api');
var AddExercice = require('./AddExercice');
var Link = require('react-router-dom').Link;

function ExercicesList(props) {
  return (
    <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2  top-under-titleLine">
      <ul className="exercices-list list-group">
        {props.exercices.map(function(exercice, index) {
          return (
            <li key={exercice._id} className="centerLi exercices-item list-group-item">
              <Link to={'/' + exercice._id} className="col-lg-12 col-sm-12 col-xs-12">{exercice.title}</Link>
              <div className=" btn-group" role="group">
                <button type="button" className="btn btn-default  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="glyphicon glyphicon-option-vertical" aria-hidden="true"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/">
                      <span>Edit</span>
                      <span className="bl glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => {
                      props.onDelete(exercice._id)
                    }} href="/">
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
  )
}

function Title(props) {
  return (
    <div className="panel panel-primary  col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2">
      <div className="panel-heading titleExercice ">Monitor your progress</div>
    </div>
  )
}

function TitleLine(props) {
  return (
    <div className="top-buffer  col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2">
      <div className="title-line-description">
        <div>Exercise:</div>
        <div>Option:</div>
      </div>
      <span className="title-line col-lg-12  col-sm-12 col-xs-12"></span>
    </div>
  )
}

class Exercices extends React.Component {
  constructor(props) {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      exercices: null
    };
  }

  componentDidMount() {
    api.getExercices().then(function(exercices) {
      this.setState(function() {
        return {exercices: exercices}
      })
    }.bind(this));
  }

  onDelete(a) {
    api.deleteExercice(a).then(function(exercices) {
      this.setState(function() {
        return {exercices: exercices}
      })
    }.bind(this));
  }

  render() {
    return (
      <div>
        <Title/>
        <AddExercice/>
        <TitleLine/> {!this.state.exercices
          ? <p></p>
          : <ExercicesList onDelete={this.onDelete} exercices={this.state.exercices}/>}

      </div>
    )
  }
}
module.exports = Exercices;
