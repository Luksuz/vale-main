import "bootstrap/dist/css/bootstrap.min.css";

export default function Question({ question, answers, handleClick, questionId, gameFinished, correctAnswer, questionNumber}) {

  function setClass(answer, gameFinished){
    if (!gameFinished) {
      return answer.selected ? "fade-out border-3 border-info bg-gradient bg-opacity-75" : "";
    } else {
      if (answer.selected && answer.text !== correctAnswer) {
        return " bg-danger bg-gradient bg-opacity-50";
      } else if (answer.text === correctAnswer) {
        return " bg-success bg-gradient bg-opacity-50";
      } else {
        return "";
      }
    }
  }

  return (
    <>
      <h1 className="me-auto">{questionNumber}.</h1>
      <div className="container d-flex flex-column justify-content-center align-items-center text-center border border-secondary border-opacity-50 border-2 rounded-5 mb-5 p-3 shadow-lg">
        <h2 className="">{question}</h2>
        <ul className=" gap-3 d-flex align-items-center ">
          {answers.map((answer, index) => (
            <li 
              key={index}
              className={setClass(answer, gameFinished) + " p-1 text-center border border-secondary rounded-3 list-group-item-action shadow-lg"}
              onClick={() => handleClick(answer.id, questionId)}
              style={{listStyleType: "none"}}
            >
              {answer.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}