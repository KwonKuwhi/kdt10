import { TodoItemProp } from '../types/types';

interface Props {
  todo: TodoItemProp;
  toggleTodo: (id: number) => void;
}

function TodoItem({ id, content, completed }: TodoItemProp) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={completed} />
        {content}
      </label>
    </li>
  );
}

export default TodoItem;
