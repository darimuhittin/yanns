import React from "react";
import Image from "next/image";
import styles from "./Landing.module.scss";
const Landing = () => {
  return (
    <div className={styles["landing"]}>
      <Image src="/assets/images/landing_1.jpeg" width={1920} height={1080} />
    </div>
  );
};

export default Landing;
