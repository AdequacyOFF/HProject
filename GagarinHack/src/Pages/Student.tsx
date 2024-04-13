import "../Pages_css/Student.css";
function Student() {
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
        </div>
      </div>
    </div>
  );
}

export default Student;
