import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function CourseList({ courses, deleteCourse }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>&nbsp;</TableHeaderColumn>
          <TableHeaderColumn>&nbsp;</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Author</TableHeaderColumn>
          <TableHeaderColumn>Category</TableHeaderColumn>
          <TableHeaderColumn>Length</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          courses.map(course => {
            return (
              <TableRow key={course.id}>
                <TableRowColumn><button onClick={deleteCourse} value={course.id}>Delete</button></TableRowColumn>
                <TableRowColumn><a href={course.watchHref}>Watch</a></TableRowColumn>
                <TableRowColumn><Link to={'/course/' + course.id}>{course.title}</Link></TableRowColumn>
                <TableRowColumn>{course.authorId}</TableRowColumn>
                <TableRowColumn>{course.category}</TableRowColumn>
                <TableRowColumn>{course.length}</TableRowColumn>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseList;
