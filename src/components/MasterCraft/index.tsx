import { FaBookmark } from "react-icons/fa";
import { Button } from "../Button";
import style from "./style.module.scss";

export function MasterCraft(props) {
  return (
    <section className={style.mastercraft}>
      <div className={style.container}>
        <img src="../../images/logo-mastercraft.svg" alt="" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className={style.buttons}>
          <Button title="Back this project" />
          <Button title="Bookmarked" icon={<FaBookmark />} />
        </div>
      </div>
    </section>
  );
}
