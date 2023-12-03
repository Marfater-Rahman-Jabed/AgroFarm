import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"
import ScrollToTop from "react-scroll-to-top";
import { BsWhatsapp } from "react-icons/bs";
import './app.css'
import ReactWhatsapp from "react-whatsapp";
function App() {
  return (
    <div className="overflow-x-clip">
      <RouterProvider router={router}></RouterProvider>
      <ReactWhatsapp number="+8801827717200" className="whatsapp_float animate-bounce hover:animate-none" message="Hi Agro Farm Ltd" title="Contact Admin"><BsWhatsapp className=' mx-auto' ></BsWhatsapp> </ReactWhatsapp>
      <ScrollToTop smooth style={{ backgroundColor: 'Green', }} />

    </div>
  )
}

export default App
