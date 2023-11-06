import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../../config/axios";
import Course from "../Course";
import './UserCourse.css'
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
function SearchCourse() {
  const { searchQuery } = useParams();
  const navigate = useNavigate();
  console.log(searchQuery);
  const [courses, setCourses] = useState([]);
  const [dataCourse,setDataCourses] = useState('');
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const response = await api.get(`/api/courses/${searchQuery}`);
      setDataCourses(setCourses(response.data))
      if (dataCourse==null) {
        swal("yay").then(() => {
          navigate("/user")
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
  };

  return (
    <div>
      <div className="search-title">
        <h1>See all course by {searchQuery}</h1>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <Course course={course} key={course.courseID} type="mycourse" />
        ))}
      </div>
    </div>
  );
}
export default SearchCourse;
