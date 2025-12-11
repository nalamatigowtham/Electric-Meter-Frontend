
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Start from './start'
// import Login from './login';
// import Admin from './admin';
// import Home from './home';
// import Usage from './usage';
// import Usageadmin from './usageadmin';
// import Homecust from './homecust';
// import Homeadmin from './homeadmin';
// import Billing from './billing';
// import Billingadmin from './billingadmin';
// import History from './history';
// import Historyadmin from './historyadmin';
// import Registration from './registration';
// import SignUp from './signUp';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element = {<Start/>} ></Route>
//           <Route path="/home" element = {<Home/>} ></Route>
//           <Route path="/homecust" element = {<Homecust/>} ></Route>
//           <Route path="/homecust/:id" element = {<Homecust/>} ></Route>
//           <Route path="/homeadmin" element = {<Homeadmin/>} ></Route>
//           <Route path="/admin" element = {<Admin/>} ></Route>
//           <Route path="/home/usage" element = {<Usage/>} ></Route>
//           <Route path="/home/usage/:id" element={<Usage />} />
//           <Route path="/homecust/usageadmin" element = {<Usageadmin/>} ></Route>
//           <Route path="/homecust/usageadmin/:id" element = {<Usageadmin/>} ></Route>
//           <Route path="/home/billing" element = {<Billing/>} ></Route>
//           <Route path="/home/billing/:id" element = {<Billing/>} ></Route>
//           <Route path="/homecust/billingadmin/:id" element={<Billingadmin />} />
//           <Route path="/homecust/historyadmin" element = {<Historyadmin/>} ></Route>
//           <Route path="/homecust/historyadmin/:id" element = {<Historyadmin/>} ></Route>
//           <Route path="/home/history" element = {<History/>} ></Route>
//           <Route path="/login" element = {<Login/>} ></Route>
//           <Route path="/registration" element = {<Registration/>} ></Route>
//           <Route path="/signUp" element = {<SignUp/>} ></Route>
//           {/* <Route path="/create" element = {<CreateStudent/>} ></Route>
//           <Route path="/update/:id" element = {<UpdateStudent/>} ></Route> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Start from './start';
import Login from './login';
import Admin from './admin';
import Home from './home';
import Usage from './usage';
import Usageadmin from './usageadmin';
import Homecust from './homecust';
import Homeadmin from './homeadmin';
import Billing from './billing';
import Billingadmin from './billingadmin';
import History from './history';
import Historyadmin from './historyadmin';
import Registration from './registration';
import SignUp from './signUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/homecust"
            element={
              <PrivateRoute roles={['admin']}>
                <Homecust />
              </PrivateRoute>
            }
          />
          <Route
            path="/homecust/:id"
            element={
              <PrivateRoute roles={['admin']}>
                <Homecust />
              </PrivateRoute>
            }
          />
          <Route
            path="/homeadmin"
            element={
              <PrivateRoute roles={['admin']}>
                <Homeadmin />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/admin"
            element={
              <PrivateRoute roles={['admin']}>
                <Admin />
              </PrivateRoute>
            }
          /> */}
          <Route
            path="/home/usage"
            element={
              <PrivateRoute>
                <Usage />
              </PrivateRoute>
            }
          />
          <Route
            path="/home/usage/:id"
            element={
              <PrivateRoute>
                <Usage />
              </PrivateRoute>
            }
          />
          <Route
            path="/homecust/usageadmin"
            element={
              <PrivateRoute roles={['admin']}>
                <Usageadmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/homecust/usageadmin/:id"
            element={
              <PrivateRoute roles={['admin']}>
                <Usageadmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/home/billing"
            element={
              <PrivateRoute>
                <Billing />
              </PrivateRoute>
            }
          />
          <Route
            path="/home/billing/:id"
            element={
              <PrivateRoute>
                <Billing />
              </PrivateRoute>
            }
          />
          <Route
            path="/homecust/billingadmin/:id"
            element={
              <PrivateRoute roles={['admin']}>
                <Billingadmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/home/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/homecust/historyadmin"
            element={
              <PrivateRoute roles={['admin']}>
                <Historyadmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/homecust/historyadmin/:id"
            element={
              <PrivateRoute roles={['admin']}>
                <Historyadmin />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
