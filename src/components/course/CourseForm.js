import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

function getAuthorMenuItems(authors) {
  return authors.map( author => {
      return <MenuItem 
        value={author.id}
        primaryText={author.firstName + ' ' + author.lastName}/>;
    })
}

function CourseForm({course, authors, onSave, onChange, saving, errors}) {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextField
        autowidth={true}
        name="title"
        floatingLabelText="Title"
        value={course.title}
        onChange={onChange}
        errorText={errors.title}/>
      <br/>

      <SelectField
        name="authorId"
        floatingLabelText="Author"
        value={course.authorId}
        defaultOption="Select Author"
        children={getAuthorMenuItems(authors)}
        onChange={onChange} 
        errorText={errors.authorId}/>
      <br/>

      <TextField
        name="category"
        floatingLabelText="Category"
        value={course.category}
        onChange={onChange}
        errorText={errors.category}/>
      <br/>

      <TextField
        name="length"
        floatingLabelText="Length"
        value={course.length}
        onChange={onChange}
        errorText={errors.length}/>
      <br/>

      <RaisedButton
        primary={true}
        disabled={saving}
        label={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
