import "./styles.css";
import { ReactComponent as ArrowIcon } from "assets/imgs/Seta.svg";

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>Inicia agora a sua busca</h6>
      </button>
      <div className="btn-icon-container">
        <ArrowIcon />
      </div>
    </div>
  );
};

export default ButtonIcon;
