import { Button, Checkbox, Typography } from 'antd';

export const ToDoItem = (props) => {
  const { item, onCheck, onRemove, onChange } = props;
  const onRemoveItem = (e) => {
    e.preventDefault();

    if (onRemove) {
      onRemove(item.id);
    }
  }

  const onEditItem = (str) => {
    item.content = str;
    onChange(item.id);
  }

  const { Text } = Typography;

  const onCheckItem = () => {
    if (onCheck) {
      onCheck(item.id);
    }
  }

  return (
    <li className="todo-item" key={item.id}>
      <Checkbox 
        checked={item.checked}
        onChange={onCheckItem}
      ></Checkbox>
      <Text editable={{ onChange: onEditItem }}>{item.content}</Text>
      <Button onClick={onRemoveItem}>Remove</Button>
    </li>
  )
}