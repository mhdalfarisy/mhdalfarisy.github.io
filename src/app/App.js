import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter as Router, 
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
// AnimatedCursor tidak diimport lagi agar kursor menjadi panah default
// import AnimatedCursor from "../hooks/AnimatedCursor"; 
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router>
      {/* Bagian <AnimatedCursor /> telah dihapus 
          agar kursor kembali ke bentuk panah standar.
      */}
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}