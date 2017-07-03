var React = require('react');
var api = require('../../utils/api');

class AddExercice extends React.Component {

  addExercice(e) {
    var title = this.refs.createInput.value.trim();
    api.postExercice(title);
  }

  render() {
    return (
      <form onSubmit={this.addExercice.bind(this)}>
        <div className="input-group col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
          <input type="text" placeholder="Add exercise" ref="createInput" className="form-control"/>
          <span className="input-group-btn">
            <button className="btn btn-primary btn-secondary">Add</button>
          </span>
        </div>
      </form>
    );
  }
};

module.exports = AddExercice;
