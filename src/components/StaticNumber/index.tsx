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
          <ItemStaticNumber value={s} />
          <ItemStaticNumber value={s} />
          <ItemStaticNumber value={s} />
        </div>
        <div className={style.preloading}>
          <div className={style.loading}></div>
        </div>
      </div>
    </section>
  );
}
