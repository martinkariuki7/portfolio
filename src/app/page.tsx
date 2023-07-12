import { Inter, DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";

const DmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return <h1>Hello world</h1>;
}
