import PropTypes from "prop-types";
import style from "./styled.module.css";

export default function LoadBtn({ more }) {
  return (
    <button className={style.Button} type="button" onClick={more}>
      Load more
    </button>
  );
}

LoadBtn.propTypes = {
  more: PropTypes.func,
};
