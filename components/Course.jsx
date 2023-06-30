import React from "react";
import Link from "next/link";

const fetchCourses = async () => {
  const res = await fetch("http://localhost:3000/api/courses");
  const data = await res.json();

  return data;
};

const Course = async () => {
  const data = await fetchCourses();
  return (
    <div className="course">
      {data.map((course) => (
        <div key={course.id} className="card">
          <h3>{course.title}</h3>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Course;
