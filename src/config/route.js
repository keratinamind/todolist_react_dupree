import TodoDetail from '../components/TodoDetail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Todo from '../pages/Todo'

const route = {
  user: {
    route: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/todo',
        component: Todo
      },
      {
        path: '/todo/:slug',
        component: TodoDetail
      }
    ],
    redirect: '/'
  },
  guest: {
    route: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/register',
        component: Register
      },
      
    ],
    redirect: '/login'
  }
};

export default route;
