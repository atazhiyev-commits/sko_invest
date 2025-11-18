import clsx from "clsx";
import Container from "../../components/container/Container";

import "./defense.scss";

interface DefenseProps {
  className?: string;
}

const Defense: React.FC<DefenseProps> = ({ className }) => {
  return (
    <section className={clsx("defense", className)}>
      <Container>
        <header className="defense__header">
          <h2 className="title-section">Защита инвесторов</h2>
          <button className="btn-section">Все правовые нормы</button>
        </header>
        <div className="defense__content">text</div>
      </Container>
    </section>
  );
};

export default Defense;
