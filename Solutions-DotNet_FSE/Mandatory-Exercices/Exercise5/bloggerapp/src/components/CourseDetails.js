import { courses } from "../data/courses";

function CourseDetails() {
  const coursedet = (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>Course Details</h1>
      {coursedet}
    </div>
  );
}

export default CourseDetails;