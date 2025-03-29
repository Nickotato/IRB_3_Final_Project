import React, { useEffect } from "react";
// Import the CSS module
import styles from "./NessHome.module.css";
// Import the background image IF you placed it in src/assets and want webpack to handle it
// If the image is in public/, use the CSS url() path directly as shown in the CSS file.
// import nessBackground from '../assets/ness-background.jpg'; // Example if handled by webpack

export default function NessHome() {
  // If you imported the image via JS:
  // const backgroundStyle = {
  //   backgroundImage: `url(${nessBackground})`
  // };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    // Use style={backgroundStyle} below if you imported the image via JS
    <div className={styles.nessHomeContainer}>
      <div className={styles.contentBox}>
        <h1 className={styles.greeting}>Welcome to Ness's Homepage</h1>

        <p className={styles.paragraph}>
          In Mexico, during a tracking mission, Ness lost her only son, Ash, to
          the Cartel. She harbored resentment towards Cady and Bales because she
          believed they discovered something while searching for Ash that they
          did not share with her. For many years, Ness studied the Cartel and
          sought any news from Mexico that might pertain to her son, but she
          found nothing.
          <br />
          <br />
          Eventually, Ness devised a plan to extract information from Cady, but
          she needed to survive in the wilderness for several days and was
          considering kidnapping someone, so she sought a legal way to handle
          that situation. In preparation for her encounter with Cady, she carved
          out a small room in a Giant Sequoia tree. After Cady found Bella, she
          brought Jude to the tree.
        </p>

        <nav>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <a href="https://www.rmvictimlaw.org/learn/legal-information/criminal/kidnapping-false-imprisonment">
                Kidnapping False Imprisonment
              </a>
            </li>
            <li className={styles.linkItem}>
              <a href="https://www.nps.gov/seki/learn/nature/bigtrees.htm">
                Sequoia Trees
              </a>
            </li>
            <li className={styles.linkItem}>
              <a href="https://www.twineagles.org/wilderness-survival-guide.html">
                How to Survive in the Wilderness
              </a>
            </li>
            <li className={styles.linkItem}>
              <a href="https://www.state.gov/designation-of-international-cartels/">
                Internation Cartels
              </a>
            </li>
            <li className={styles.linkItem}>
              <a href="https://mexiconewsdaily.com/">Mexico Daily News</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
