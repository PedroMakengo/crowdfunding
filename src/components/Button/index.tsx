import style from "./style.module.scss";
export function Button(props) {
  return (
    <button className={style.button}>
      {props.icon ? <div className={style.buttonicon}>{props.icon}</div> : ""}
      <span>{props.title || "Default"}</span>
    </button>
  );
}
