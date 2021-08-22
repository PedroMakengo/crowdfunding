import Head from "next/head";
import { AboutProject } from "../components/AboutProject";
import { MasterCraft } from "../components/MasterCraft";
import { StaticNumber } from "../components/StaticNumber";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Crhowdfunding</title>
      </Head>
      <MasterCraft />
      <StaticNumber />
      <AboutProject />
      {/* Back this project Bookmark $89,914 of $100,000 backed 5,007 total backers
      56 days left About this project  Bamboo Stand Pledge $25 or more You get an ergonomic stand made
      of natural bamboo. You've helped us launch our promotional campaign, and
      you’ll be added to a special Backer member list. 101 left Select Reward
      Black Edition Stand Pledge $75 or more You get a Black Special Edition
      computer stand and a personal thank you. You’ll be added to our Backer
      member list. Shipping is included. 64 left Select Reward Mahogany Special
      Edition Pledge $200 or more You get two Special Edition Mahogany stands, a
      Backer T-Shirt, and a personal thank you. You’ll be added to our Backer
      member list. Shipping is included. 0 left Out of Stock Back this project
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
      world? Pledge with no reward Choose to support us without a reward if you
      simply believe in our project. As a backer, you will be signed up to
      receive product updates via email. Bamboo Stand Pledge $25 or more You get
      an ergonomic stand made of natural bamboo. You've helped us launch our
      promotional campaign, and you’ll be added to a special Backer member list.
      101 left Enter your pledge $25 Continue Black Edition Stand Pledge $75 or
      more You get a Black Special Edition computer stand and a personal thank
      you. You’ll be added to our Backer member list. Shipping is included. 64
      left Enter your pledge $75 Continue Mahogany Special Edition Pledge $200
      or more You get two Special Edition Mahogany stands, a Backer T-Shirt, and
      a personal thank you. You’ll be added to our Backer member list. Shipping
      is included. 0 left Enter your pledge $200 Continue Thanks for your
      support! Your pledge brings us one step closer to sharing Mastercraft
      Bamboo Monitor Riser worldwide. You will get an email once our campaign is
      completed. Got it! */}
    </>
  );
}
