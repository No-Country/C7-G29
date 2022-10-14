import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-login.png";
import "./DisplayChallenges.css";
export default function DisplayChallenges({ x }) {
  let navigate = useNavigate();
  function calculateWinner() {
    var array = [...x.participants];
    array = array.sort((a, b) => b.likes.length - a.likes.length);

    return array;
  }

  const winnersSoFar = calculateWinner();

  return (
    <div className="container_reto">
      <div className="winners_container_reto">
        <img
          src={winnersSoFar[0]?.url || "https://image.shutterstock.com/image-vector/prohibition-sign-no-photography-260nw-209270626.jpg"}
          alt="winner so far"
          className="reto_winner_so_far"
          onClick={() => navigate("/details/" + winnersSoFar[0]?._id)}
        />
        <div>
          {winnersSoFar.map((x, index) => {
            if (index !== 0 && index < 5) return <img src={x.url} key={x._id} alt="almost winners" className="almost_winners_reto" onClick={() => navigate("/details/" + x._id)}></img>;
          })}
        </div>
      </div>
      <div className="reto_datos_generales">
        <div>
          <div className="participa_reto">Participa en el reto del mes:</div> <div className="participa_reto_titulo">{x.title}</div>
        </div>
        <div className="quien_gana_reto">{x.description}</div>
        <div className="recompensa_reto">Gana los primeros lugares y consigue el premio de ${x.price}USD</div>
        <div className="fechas_container_reto">
          <div className="fechas_texto_reto">Comenzo el: {x.createdAt.split("T")[0]}</div>
          <div className="fechas_texto_reto">Termina el: {x.ends.split("T")[0]}</div>
        </div>
      </div>
      <img src={logo} alt="logo" className="logo_retos_data"></img>
    </div>
  );
}
