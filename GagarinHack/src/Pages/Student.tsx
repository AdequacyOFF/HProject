import "../Pages_css/Student.css";
import React, { useState } from "react";
function Student() {
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const handleSpecializationChange = (event) => {
    setSelectedSpecialization(event.target.value);
  };
  return (
    <div className="StudentPage">
      <div className="Avatar">
        <img src="src/Icons/Avatar.png" alt="" />
      </div>
      <div className="StudentInfo">
        <div className="FIO">
          <p>Зубенко</p>
          <p>Михаил</p>
          <p>Петрович</p>
        </div>
        <div className="StudentID">
          <p>ID 0000</p>
        </div>
        <div className="PersonalInfomation">
          <h2>
            Курс:<span>0</span>
          </h2>
          <h2>
            Факультет:<span>0</span>
          </h2>
          <h2>
            Кафедра:<span>0</span>
          </h2>
          <h2>
            Специальность:<span>0</span>
          </h2>
          <div className="Dropdown">
            <img src="src/Icons/Dropdown.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
