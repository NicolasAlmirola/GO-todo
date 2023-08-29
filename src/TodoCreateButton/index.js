import './TodoCreateButton.css';
import img from './Img-Todo-Create.png'

function CreateTodoButton({setOpenModal}) {
    return (
        <>
            <button 
                className= "CreateTodoButton"
                onClick={
                    () => {
                        setOpenModal(state => !state);
                    }
                }>
            Crear TODO
            </button>
            <img src={img} alt='Imagen adicional no relevante'/>
        </>
    );
}

export { CreateTodoButton };