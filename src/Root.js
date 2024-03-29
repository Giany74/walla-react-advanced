import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


// export default function Root({ store, children }) {
//     return (
//         <Provider store = {store}>
//         </Provider>
//     )
// }

export default function Root({ store, children }) {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}
