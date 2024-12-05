import React from "react";
import PropTypes from "prop-types";

function Student({name,age,isStudent}) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Student: {isStudent ? "yes" : "no"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired
};
// so propTypes helps 
// is used for type-checking props in the Student component. Here’s why it's helpful:

// 1. Type Validation
// It ensures that each prop passed to Student has the expected data type:
// name must be a string.
// age must be a number.
// isStudent must be a boolean.
// 2. Required Props
// The .isRequired flag ensures that each prop is mandatory. If any required prop is missing, React will log a warning in the console during development.
// 3. Error Prevention
// By specifying the expected types and required props, you can catch bugs early and prevent errors that might occur when the component is rendered with incorrect prop types.
//also refer to default props

export default Student;
