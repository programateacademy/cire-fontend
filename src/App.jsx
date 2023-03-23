import React from "react";
import ChangePassword from "./pages/login/ChangePassword";
import LoginAdmin from "./pages/login/LoginAdmin";
import LoginProfe from "./pages/login/LoginProfe";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { ListProfessionals } from "./pages/CRUD professional/ListProfessionals";
import AccountProffesional from "./pages/CRUD professional/AccountProfessional";




function App() {
	return (
		
		<>
		 <BrowserRouter>
		 <Routes>
			<Route path='/loginAdmin' element={<LoginAdmin/>}></Route>
			<Route path='/changePassword' element={<ChangePassword/>}></Route>
			<Route path='/loginProfe' element={<LoginProfe/>}></Route>
			<Route path='/ListProfessionals' element={<ListProfessionals/>}></Route>
			<Route path='/accountprofessional' element={<AccountProffesional/>}></Route>
		

		 </Routes>
		 </BrowserRouter>

		</>
	);
}

export default App;
