import { ItemStaticNumber } from "../ItemStaticNumber";
import style from "./style.module.scss";

export function StaticNumber() {
  const value = 89.914;
  const s = value.toLocaleString("PT-BR", {
    style: "currency",
    currency: "USD",
  });

  return (
    <section className={style.staticnumber}>
      <div className={style.container}>
        <div className={style.itemstatic}>
          <ItemStaticNumber value={s} text="of $100,00 backed" />
          <ItemStaticNumber value="5,007" text="total backers" />
          <ItemStaticNumber value={s} text="days left" />
        </div>
        <div className={style.preloading}>
          <div className={style.loading}></div>
        </div>
      </div>
    </section>
  );
}
