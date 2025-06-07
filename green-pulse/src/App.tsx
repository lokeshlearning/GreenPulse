import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import HomePage from "./features/home-page/HomePage";

function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <HomePage/>
    </>
  )
}

export default App