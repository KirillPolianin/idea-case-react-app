import React, { Component } from 'react';

class CategoryItemAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      budgetLimit: '',
      isActive: '0'
    };
  }

  render() {
    return (
      <div className="col-md-4">
        <form onSubmit={this.onInputSubmit}>
          <h5>Add new category</h5>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" className="form-control" name="title" onChange={this.onInputChange} value={this.state.title} required />
          </div>
          <div className="form-group">
            <label htmlFor="budgetLimit">Budget limit</label>
            <input type="number" id="budgetLimit" className="form-control" name="budgetLimit" onChange={this.onInputChange} value={this.state.budgetLimit} required />
          </div>
          <div className="form-group">
            <label htmlFor="isActive">isActive</label>
            <select id="isActive" className="form-control" name="isActive" onChange={this.onInputChange} value={this.state.isActive}>
              <option value="1">True</option>
              <option value="0">False</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }

  onInputSubmit = (event) => {
    this.props.onFormSubmit(this.state);
    this.setState({
      title: '',
      budgetLimit: '',
      isActive: '0'
    });
    event.preventDefault();
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}

export default CategoryItemAddForm;
