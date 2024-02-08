import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/actions/actions';

export const App = () => {
   const counter = useSelector(state => state)
   const dispatch = useDispatch()

   return (
      <section id="redux">
         <h1>Counter App</h1>
         <h3 className="counter">{counter}</h3>
         <div className="btn-container">
            <button onClick={() => dispatch(increment())}>
               <h3>Increment</h3>
            </button>
            <button onClick={() => dispatch(decrement())}>
               <h3>Decrement</h3>
            </button>
            <button onClick={() => dispatch(reset())}>
               <h3>Reset</h3>
            </button>
         </div>
      </section>
   )
}

// Three Redux Concepts:
   // Store - The global state, accessible across any component
   // Actions - Tells redux how to modify the state
   // Reducers - Responsible for taking an action & updating it in the redux store
