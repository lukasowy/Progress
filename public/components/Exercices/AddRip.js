var React = require('react');
var api = require('../../utils/api');

class AddRip extends React.Component {
constructor(props){
  super();
this.state = {
  id: props.id
}
};
  addRip() {
    var rip = this.refs.createInput.value.trim();
    var id = this.state.id;
    api.postRip(id, rip);
    console.log(id);
  }

  render() {
    return (
      <form onSubmit={this.addRip.bind(this)}>
        <div className="input-group col-lg-12 col-lg-offset-0 col-sm-12 col-sm-offset-0 col-xs-8 col-xs-offset-2">
          <input type="text" placeholder="Add rip" ref="createInput" className="form-control"/>
          <span className="input-group-btn">
            <button className="btn btn-primary btn-secondary">Add</button>
          </span>
        </div>
      </form>
    );
  }
};

module.exports = AddRip;
