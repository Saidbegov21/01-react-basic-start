export default function FeedbackSection() {
  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input type="text" className="controle" id="name" />
        <label htmlFor="reason">Причина обращения</label>
        <select id="reason" className="controle">
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложения</option>
        </select>
      </form>
    </section>
  );
}
