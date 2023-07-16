import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar, Footer } from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Acceuil, FAQ, Enregistrer, Login, DeroulementEmployeur, StageDisponible, DeroulementEtudiant, ProfilCompetences, AjouterStage, StageAjouter } from './views/index.js'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './GlobalState/Store.js'
import './index.css'  


const router = createBrowserRouter([
  {
    path: '/',
    element: <Acceuil />
  },
  {
    path: '/faq',
    element: <FAQ />
  },
  {
    path: '/enregistrement',
    element: <Enregistrer />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/deroulementstageemployeur',
    element: <DeroulementEmployeur />
  },
  {
    path: '/deroulementstage',
    element: <DeroulementEtudiant />
  },
  {
    path: '/profilscompetences',
    element: <ProfilCompetences />
  },
  {
    path: '/creerstage',
    element: <AjouterStage /> 
  },
  {
    path: '/stageajouter',
    element: <StageAjouter />
  },
  {
    path: '/stagesdispo',
    element: <StageDisponible />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavBar />
        <RouterProvider router={router} />
      </PersistGate>
      {/* Footer will go here */}
    </Provider>
  </React.StrictMode>,
)
