import style from "./style.module.scss";

export function StaticNumber() {
  const value = 100;
  const s = value.toLocaleString("PT-BR", {
    style: "currency",
    currency: "USD",
  });

  return (
    <section className={style.staticnumber}>
      <div className={style.container}>
        <div className="item">{s}</div>
      </div>
    </section>
  );
}
