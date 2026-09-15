import type { Metadata } from "next";
import Home from "../page";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Version 2 palette comparison",
  description: "A refined colour-palette comparison for the Centre for Gender Studies, NSUK.",
};

export default function VersionTwoPage() {
  return (
    <div className={styles.versionTwo} data-palette-version="2">
      <Home />
    </div>
  );
}
