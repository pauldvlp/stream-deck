import './Confirm.css'

export const Confirm = ({ title, description, onConfirm, onCancel }) => {
  return <section className="Confirm">
    <h3>{title}</h3>
    <p>{description}</p>
    <footer>
      <button onClick={onCancel}>No</button>
      <button className='shadow' onClick={onConfirm}>Sí</button>
    </footer>
  </section>
}
