import React from "react";
import { connect } from "react-redux";
import { createCourse } from "../../redux/actions/courseActions";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(createCourse(this.state.course));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage);
