import React from "react";
import LoginAdmin from "./pages/login/LoginAdmin";
import LoginProfe from "./pages/login/LoginProfe";
//import Alert from "./components/atoms/Alert"


function App() {
	return (
		<div>
			{/* <Alert/> */}
			<LoginProfe/> 
			<LoginAdmin/>
		</div>
	);
}

export default App