import React from "react";
import budget from "./budget.png";
import drivetest from "./drivetest.png";
import expense from "./expense.png";
import foodOrder from "./foodOrder.png";
import litHaven from "./litHaven.png";
import pingPong from "./pingPong.png";
import skyCrest from "./skycrest.png";

import ProjectCard from "./project_card/ProjectCard";

import styles from "./Project.module.css";

const Project = React.forwardRef((_, ref) => {
  return (
    <div ref={ref}>
      <h1 className={styles.title}>My Projects</h1>

      <div className={styles.project_container}>
        <ProjectCard
          img={litHaven}
          demo="https://pranavmodi999.github.io/LitHaven/"
          link="https://github.com/PranavModi999/LitHaven"
        />
        <ProjectCard
          img={drivetest}
          demo="N/A"
          link="https://github.com/PranavModi999/DriveTest"
        />
        <ProjectCard
          img={budget}
          demo="https://pranavmodi999.github.io/Expense-App/"
          link="https://github.com/PranavModi999/Expense-App"
        />
        <ProjectCard
          img={foodOrder}
          demo="https://pranavmodi999.github.io/Food-Order-App/"
          link="https://github.com/PranavModi999/Food-Order-App"
        />
        <ProjectCard
          img={skyCrest}
          demo="https://pranavmodi999.github.io/SkyCrest-Airline/"
          link="https://github.com/PranavModi999/SkyCrest-Airline"
        />
        <ProjectCard
          img={expense}
          demo="N/A"
          link="https://github.com/PranavModi999/budget-app"
        />
        <ProjectCard
          img={pingPong}
          demo="N/A"
          link="https://github.com/PranavModi999/PingPong-Game"
        />
      </div>
    </div>
  );
});
export default Project;
