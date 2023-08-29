import { CompleteIcon } from './completeIcon';
import { DeleteIcon } from './deleteIcon';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className='TodoItem'>
        <div className='container'>
            <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
            />
            <DeleteIcon onDelete={props.onDelete} />
        </div>
        <p
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
        >
            {props.text}
        </p>
        </li>
    );
}

export { TodoItem };
