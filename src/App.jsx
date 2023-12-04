import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"
import ScrollToTop from "react-scroll-to-top";
import { BsWhatsapp } from "react-icons/bs";
import './app.css'
import ReactWhatsapp from "react-whatsapp";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="overflow-x-clip">
      <RouterProvider router={router}></RouterProvider>
      <ReactWhatsapp number="+8801827717200" className="whatsapp_float animate-bounce hover:animate-none" message="Hi Agro Farm Ltd" title="Contact Admin"><BsWhatsapp className=' mx-auto' ></BsWhatsapp> </ReactWhatsapp>
      <ScrollToTop smooth style={{ backgroundColor: 'Green', }} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
