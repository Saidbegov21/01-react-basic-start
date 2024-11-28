import Button from "./Button/Button";
import { useState } from "react";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: " ",
    hasError: false,
    reason: "help",
  });

  function handelNameChange(event) {
    setForm((prew) => ({
      ...prew,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
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
          value={form.name}
          style={{
            border: form.name.trim().length ? null : "1px solid red",
          }}
          onChange={handelNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="controle"
          value={form.reason}
          onChange={(event) =>
            setForm((prew) => ({ ...prew, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложения</option>
        </select>
        <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
