import { Bank } from './pages/Bank/Bank'
import { Insurences } from './pages/Insurences/Insurences'
import { Water } from './pages/Water/Water'
import { Elec } from './pages/Elec/Elec'
import { Health } from './pages/Health/Health'
import { Carr } from './pages/Car/Carr'
import { Housse } from './pages/House/Housse'
import { Taxes } from './pages/Taxes/Taxes'
import { Routes, Route } from "react-router-dom"
import { Accueil } from "./pages/Accueil/Accueil"
import { Recover } from "./pages/Recover/Recover"
import { Moving } from "./pages/Moving/Moving"
import NavBar from "@/components/NavBar/index"
import Profil from "./pages/Profils/Profil/Profil"
import Registration from "./pages/Profils/registration/registration"
import Dealer from "./pages/Dealer/Dealer"
import Login from "./pages/Profils/Login/Login"
import Add from "./pages/Recover/Add/Add"
import ForgottenPassword from "./pages/Profils/ForgottenPassword/ForgottenPassword"
import Doc from "./pages/Recover/Doc/Doc"
import { hasAuthenticated } from './services/AuthApi'




function App() {
  //const [isAuthnticated, setIsAuthenticated] = useState(hasAuthenticated())
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/Banks" element={<Bank />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Water" element={<Water />} />
        <Route path="/Elec" element={<Elec />} />
        <Route path="/Taxes" element={<Taxes />} />
        <Route path="/Insurences" element={<Insurences />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Moving" element={<Moving />} />
        <Route path="/Dealer" element={<Dealer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Carr" element={<Carr />} />
      </Routes>


    </>
  )
}

export default App
/*
  <Route path="/Profil" element={<Profil />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
        <Route path="/Moving" element={<Moving />} />
        <Route path="/Login" element={<Login />} />
          <Route path="/Recover" element={<Recover />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Doc" element={<Doc />} />
    <Route path="/Housse" element={<Housse />} />
        */