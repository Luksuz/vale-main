import "bootstrap/dist/css/bootstrap.min.css";

export default function Skill({ skillName, imgURL, subSkills }) {

  const mappedSubSkills = subSkills.map((subSkill) => {
    return <li>{subSkill}</li>;
  });

  return (
    <div className="col-11 col-md-5 m-3 border border-black rounded-4 p-3 shadow-lg">
    <div className="d-flex gap-2 justify-content-center aling-items-center">
      <img src={imgURL} width={"13%"}/>
      <h2>{skillName}</h2>
    </div>
    <br></br>
    <ul>
      {mappedSubSkills}
    </ul>
  </div>
  );
}
