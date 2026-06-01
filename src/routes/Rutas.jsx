import { Pagess,Simulacion,resultados,Si } from "../pages";
import {Routes, Route, Navigate} from "react-router-dom";
import { AdminLayouts } from "../Layout";
 

function Rutas() {

  const loadLayout=(Layout, Page)=>{
    return(
      <Layout>
        <Page/>
      </Layout>
    )
  }

  return (
  
    <Routes>
        <Route path='/' element={loadLayout(AdminLayouts,Pagess)}/>
        <Route path='/res' element={loadLayout(AdminLayouts,resultados)}/>
        <Route path='/oki' element={loadLayout(AdminLayouts,Si)}/>

    </Routes>
  
  )
}

export default Rutas;