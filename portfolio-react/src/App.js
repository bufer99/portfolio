import { useEffect, useRef, useState, createContext } from 'react';
import './App.css';
import styled from 'styled-components'
import { Navigation } from './components/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { References } from './components/References';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { motion, AnimatePresence } from "framer-motion"


export default function App() {
  const location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={ <Navigation/>} >
            <Route path="/aboutMe" element={<About/>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/goals" element={<></>} />
            <Route path="/references" element={<References />} />
          </Route>
        </Routes>
      </AnimatePresence>
  )
}