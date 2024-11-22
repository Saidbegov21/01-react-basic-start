import { differences } from "../data";
import { useState } from "react";
import Button from "./Button/Button";

export default function ButtonSection() {
  const [contentType, setContentType] = useState(null);
  function handelClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других?</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handelClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handelClick("easy")}
      >
        Дотупность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handelClick("program")}
      >
        Котцентрация
      </Button>

      {!contentType && <p>Нажмите на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
