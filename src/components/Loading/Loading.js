import { ImSpinner10 } from "react-icons/im";
import style from "./styled.module.css";

export default function Loading() {
  return (
    <div role="alert">
      <div>
        <ImSpinner10 size="40" className={style.icon_spon} />
      </div>
    </div>
  );
}
