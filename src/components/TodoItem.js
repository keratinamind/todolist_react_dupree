import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";



function TodoItem({ list: { id, title, status , url } }) {

  const handleClickDelete = async () => {
    await axios.delete(`lists/${id}`);
    window.location.reload();
  }

  return (
    <div className={`card shadow rounded-0 bd-callout bd-callout-${status ? 'success' : 'warning'}`}>
      <div className="card-body d-flex justify-content-between align-items-center text-c">
        <Link className="navbar-brand text-black-50" to={{pathname:`/todo/${url}`, state: { listId : id }}} >
          {title}
        </Link>
        <div className="btn-group">
          {/* <button className="btn btn-outline-info">
            <i className={`bi-toggle2-${status ? 'on' : 'off'}`} />
          </button>
          <button className="btn btn-primary">
            <i className="bi-pencil-square" />
          </button> */}
          <button className="btn btn-danger" onClick={handleClickDelete}>
            <i className="bi-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
