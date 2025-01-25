import SideBar from "./components/common/sidebar/SideBar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.post["accept"] = "application/json"
const App = () => {
  return (
      <>

          <SideBar />
          <Dashboard />
      </>
  )
}

export default App
