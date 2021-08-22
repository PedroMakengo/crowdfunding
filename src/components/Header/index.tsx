import style from "./style.module.scss";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src="../images/logo.svg" alt="" />
        <nav>
          <a href="#">About</a>
          <a href="#">Discover</a>
          <a href="#">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
