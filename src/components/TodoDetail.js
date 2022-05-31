import React , {useState , useEffect} from "react"; 
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { useLocation } from "react-router";

function TodoDetail() {
  let { slug } = useParams();
  const [isReveal, setIsReveal] = useState(false);
  
  const location = useLocation();
  
  const [list, setList] = useState({
    title: "",
    comment: "",
    status: true,

  });
  const [comment, setComment] = useState("");
  
  const [donemsg , setDonemsg] = useState("");


  const handleChangeComment = (e) => {
    setComment(e.target.value);
  }
  const handleClickCommentChange = async (e) => {
    await axios.put(`/lists/${location.state.listId}`, {comment})
    .then(res => {console.log(res.data.comment);
    setList(cur => ({...cur , comment : res.data.comment }))
    setComment(res.data.comment);
    setDonemsg(res.data.message)}
    );
    
  }
  const handleClickStatusChange = async (e) => {
    await axios.put(`/lists/${location.state.listId}`, {status : true})
    .then(res => {console.log(res.data.comment);
      setList(cur => ({...cur , status : res.data.status })) 
      }
    );
    ;
    
  }

  useEffect(() => {
    axios.get(`/lists/${location.state.listId}`).then(res => setList(res.data.list) )
    ;
    }, [])
  
    

  return (
    <div class=" w-full lg:max-w-full lg:flex border m-10">
      
      <div class="flex items-center m-5">
        <div class="text-sm">
          <div className="fs-2 text-success">Your list : {list.title} </div>
          
          <p class="my-5 text-muted fs-5">Comment : {list.comment} </p>
          <label for="inputPassword5" class="form-label">Edit Comment</label>
          <div className="d-flex flex-row">
          <input type="text" id="inputPassword5" class="form-control h-25" value={comment} onChange={handleChangeComment}/>
          <button type="submit" class="btn btn-primary mx-3" onClick={handleClickCommentChange}>Submit</button>
          </div>


          <p class="text-gray-600 mt-5">Status : {list.status == true ? "Done" : "On Progress"}</p>
          <button type="submit" class="btn btn-primary" onClick={handleClickStatusChange}>{list.status == true ? "Mark as done" : "Mark as available"}</button>


          <div className="my-5">
          <button onClick={() => setIsReveal((cur) => !cur)} type="button" class="mr-3 btn btn-secondary">
                  {isReveal ? "Hide url" : "Share"}
          </button>
          <span className="mx-5">{isReveal ? `http://localhost:3000/todo/${slug}` : ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
