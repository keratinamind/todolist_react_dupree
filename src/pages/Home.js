import { useEffect, useState } from 'react';
import axios from '../config/axios';
import AddForm from '../components/AddForm';
import TodoList from '../components/TodoList';
// import { getToken, removeToken } from '../services/localStorage';

function Home() {
  const [lists, setLists] = useState([]);

  // const history = useHistory();

  useEffect(() => {
    axios
      .get('/lists') 
      .then(res => {
        setLists(res.data.lists);
        console.log(lists);
      })
      .catch(err => {
        // if (err.response && err.response.status === 401) {
        //   removeToken();
        //   setUser(null);
        //   history.push('/login');
        //   // window.location.replace('/login')
        // }
      });
  }, []);

  return (
    <>
      <AddForm setLists={setLists} />
      <TodoList lists={lists} />
    </>
  );
}

export default Home;
