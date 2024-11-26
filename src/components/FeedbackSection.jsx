import Button from "./Button/Button";
import { useState } from "react";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handelNameChange(event) {
    setName(event.target.value);
  }

  function handelReasonChange(event) {
    setReason(event.target.value);
  }
  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="controle"
          value={name}
          style={{
            border: name.trim().length ? null : "1px solid red",
          }}
          onChange={handelNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="controle"
          value={reason}
          onChange={handelReasonChange}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложения</option>
        </select>
        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>
        <Button>Отправить</Button>
      </form>
    </section>
  );
}
