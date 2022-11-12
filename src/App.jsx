import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './style/dark.scss';
import React, { useContext, Suspense } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import { Box } from '@mui/material';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { HashLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';

function App() {
  const { darkMode } = useContext(DarkModeContext);


  const Loader = () => {
    return (
      <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <HashLoader color="#5FB5F3" size={70} speedMultiplier="2" />
      </Box>
    );
  };


  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <AdminRoutes />

        </Suspense>
        {/*<Loader />*/}
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
