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
      </div>
    </div>
  );
}

export default Student;
