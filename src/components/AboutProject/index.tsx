import { ItemProject } from "../ItemProject";
import style from "./style.module.scss";
export function AboutProject() {
  return (
    <section className={style.aboutproject}>
      <div className={style.container}>
        <div className={style.about}>
          <h1>About this Project</h1>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <ItemProject
          title="Bamboo Stand"
          value="Pledge $25 or more"
          describe="You get an ergonomic stand made
        of natural bamboo. You've helped us launch our promotional campaign, and
        you’ll be added to a special Backer member list."
          footerValue="101"
        />
        <ItemProject
          title="Black Edition Stand"
          value="Pledge $75 or more"
          describe="You get a Black Special Edition
          computer stand and a personal thank you. You’ll be added to our Backer
          member list. Shipping is included."
          footerValue="64"
        />
        <ItemProject
          title="Black Edition Stand"
          value="Pledge $75 or more"
          describe="You get a Black Special Edition
          computer stand and a personal thank you. You’ll be added to our Backer
          member list. Shipping is included."
          footerValue="64"
        />
      </div>
    </section>
  );
}
