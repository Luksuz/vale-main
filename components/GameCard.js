import "bootstrap/dist/css/bootstrap.min.css"

export default function GameCard(props) {
    return(
        <div className="border border-3 shadow-lg rounded-5 col-12 col-md-4 col-xl-3 m-1">
            <h4>{props.gameTitle}</h4>
            <img src={props.gameImg} alt={props.gameTitle} width="100%"/>
            <h4 className="text-start">price: {props.price} $</h4>
            <h6 className="text-start">*Available on {props.store}</h6>
        </div>
    )

}