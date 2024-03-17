import React from 'react'
import {Routes,Route} from "react-router-dom";
import Item from "../components/Item";

const NavbarRoutes = () => {
  return (
    <Routes>
        <Route index element={<h1>Home</h1>} />
        <Route path="/science" element={<Item searchTerm="Science" />}/>
        <Route path="/technology" element={<Item searchTerm="Technology" />}/>
        <Route path="/sports" element={<Item searchTerm="Sports" />}/>
    </Routes>
  )
}

export default NavbarRoutes;