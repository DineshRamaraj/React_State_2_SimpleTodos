// Write your code here
import './index.css'

const myComponent = props => {
  const {todoList, onDeleteItem} = props
  const {title, id} = todoList
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default myComponent
