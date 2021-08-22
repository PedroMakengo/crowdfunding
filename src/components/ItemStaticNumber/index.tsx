import style from "./style.module.scss";

export function ItemStaticNumber(props) {
  return (
    <div className="item">
      <h1>{props.value}</h1>
      <p>Of $100,000 backed</p>
    </div>
  );
}
