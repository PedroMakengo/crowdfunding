import { Button } from "../Button";
import style from "./style.module.scss";

export function ItemProject(props) {
  return (
    <article className={style.project}>
      <div className={style.content}>
        <h1>{props.title}</h1>
        <span>{props.value}</span>
      </div>
      <p>{props.describe}</p>
      <div className={style.footer}>
        <h1>
          {props.footerValue}
          <sup>Left</sup>
        </h1>
        <Button />
      </div>
    </article>
  );
}
