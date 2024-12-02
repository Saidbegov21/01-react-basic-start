import Button from "./Button/Button";
import { useState, useRef} from "react";

function StateVsRef() {
  const input = useRef()
  const [show, setShow] = useState(false)

function handelKeyDown(event){
  if (event.key === 'Enter'){
    setShow(true)
  }
}

  return (
    <div>
      <h3>Input value: {show && input.current.value }</h3>
      <input
      ref={input}
        onKeyDown={handelKeyDown}
        type="text"
        className="control"
      />
    </div>
  );
}

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
      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handelNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
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
      <StateVsRef />
    </section>
  );
}
