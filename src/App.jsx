import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {EditInfo} from "./components/organism/PrincipalForm/EditV2";
import AddInfo from "./components/organism/PrincipalForm/FormV2";
import {Categories} from "./pages/Categories";
import {ListStudents} from "./pages/CRUD Student 5 years/ListStudents";
import AddStudent from "./components/organism/CRUD Students/AddStudent";
import EditStudent from "./components/organism/CRUD Students/EditStudent";
import ListStudents6Years from "./pages/CRUD Student 6 years/ListStudents6Years"
import ListStudents7Years from "./pages/CRUD Student 7 years/ListStudents7Years"
import ListStudents8Years from "./pages/CRUD Student 8 years/ListStudents8Years"
import ListStudents9Years from "./pages/CRUD Student 9 years/ListStudents9Years"
import LoginAdmin from "./pages/login/LoginAdmin"
import LoginProfe from "./pages/login/LoginProfe"
import ChangePassword from "./pages/login/ChangePassword"
import ListProfessionals from "./pages/CRUD professional/ListProfessionals"
import AccountProffesional from "./pages/CRUD professional/AccountProfessional"

function App() {
    return (
        <>
           
            <BrowserRouter>
                <Routes> 
                    <Route path='/categories'
                        element={<Categories/>}></Route>
                    <Route path='/addstudent'
                        element={<AddStudent/>}></Route>
                    <Route path='/list5years'
                        element={<ListStudents/>}></Route>
                    <Route path='/list6years'
                        element={<ListStudents6Years/>}></Route>
                    <Route path='/list7years'
                        element={<ListStudents7Years/>}></Route>
                    <Route path='/list8years'
                        element={<ListStudents8Years/>}></Route>
                    <Route path='/list9years'
                        element={<ListStudents9Years/>}></Route>
                    <Route path="/editstudents/:id"
                        element={<EditStudent/>}
                        exact></Route>
                    <Route path="/addinfo/:id"
                        element={<AddInfo/>}></Route>
                    <Route path="/editInfo/:id"
                        element={<EditInfo/>}
                        exact></Route>
                    <Route path='/loginAdmin'
                        element={<LoginAdmin/>}></Route>
                    <Route path='/changePassword'
                        element={<ChangePassword/>}></Route>
                    <Route path='/'
                        element={<LoginProfe/>}></Route>
                    <Route path='/ListProfessionals'
                        element={<ListProfessionals/>}></Route>
                    <Route path='/accountprofessional'
                        element={<AccountProffesional/>}></Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;

