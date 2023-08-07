import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function Skill({ skillName, skillGrade, imgURL, size }) {
  function rateSkill(grade) {
    if (grade === 1) {
      return (
        <>
          <Button variant="danger"> </Button>
          <Button variant="secondary"></Button>
          <Button variant="secondary"></Button>
          <Button variant="secondary"></Button>
          <Button variant="secondary"></Button>
        </>
      );
    } else if (grade === 2) {
      return (
        <>
          <Button variant="warning"></Button>
          <Button variant="warning"></Button>
          <Button variant="secondary"></Button>
          <Button variant="secondary"></Button>
          <Button variant="secondary"></Button>
        </>
      );
    } else if (grade === 3) {
      return (
        <>
          <Button variant="warning"></Button>
          <Button variant="warning"></Button>
          <Button variant="warning"></Button>
          <Button variant="secondary"></Button>
          <Button variant="secondary"></Button>
        </>
      );
    } else if (grade === 4) {
      return (
        <>
          <Button variant="success"></Button>
          <Button variant="success"></Button>
          <Button variant="success"></Button>
          <Button variant="success"></Button>
          <Button variant="secondary"></Button>
        </>
      );
    } else if (grade === 5) {
      return (
        <>
          <Button variant="success"></Button>
          <Button variant="success"></Button>
          <Button variant="success"></Button>
          <Button variant="success"></Button>
          <Button variant="success"></Button>
        </>
      );
    }
  }

  const healthBar = rateSkill(skillGrade);

  return (
        <div className="col-11 col-md-5 m-3 border border-black rounded-4 p-3 shadow-lg">
          <img src={imgURL} width={size} alt="Skill Icon"/>
          <h1>{skillName}</h1>
            {healthBar}
        </div>
  );
}
