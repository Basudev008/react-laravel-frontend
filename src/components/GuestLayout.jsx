import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function GuestLayout() {
  const {token} = useStateContext()
  // debugger;
  if(token){
    return <Navigate to="/" />
  }
  return (
    <div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
