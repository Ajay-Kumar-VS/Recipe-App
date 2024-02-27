import React, { StrictMode ,lazy} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App.jsx'
// import Home from "./Components/Home/Home.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// // const App=lazy(()=> import('./App.jsx'))
const Home=lazy(()=> (import("./Components/Home/Home.jsx")))
const Recipe=lazy(()=> (import('./Components/RecipePage/Recipe.jsx')))




//first way to create Routes
// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:'Recipe',
//         element:<Recipe/>
//       }
//     ]
//   }
// ])

//2nd way to create Routes

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Suspense fallback={<Loading/>}>
    <Route
      path="/"
      element={<App />}
      errorElement={<div className="pageNotFound">Page Not Found</div>}>
      <Route path="" element={<Home/>}/>
      <Route path="Recipe" element={<Recipe/>}/>
    </Route>
    // </Suspense>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
