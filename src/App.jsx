import React from "react";
import ChangePassword from "./pages/login/ChangePassword";
import LoginAdmin from "./pages/login/LoginAdmin";
import LoginProfe from "./pages/login/LoginProfe";



function App() {
	return (
		<div>
			<LoginProfe/> 
			<LoginAdmin/>
			<ChangePassword/>
		</div>
	);
}

export default App