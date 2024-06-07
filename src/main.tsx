import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import {MantineProvider} from '@mantine/core';
import {BrowserRouter} from "react-router-dom";
import {Notifications} from "@mantine/notifications";
import {ModalsProvider} from "@mantine/modals";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider defaultColorScheme={"dark"}>
          <ModalsProvider >
              <BrowserRouter>
                  <Notifications />
                <App />
              </BrowserRouter>
          </ModalsProvider>
      </MantineProvider>
  </React.StrictMode>,
)
