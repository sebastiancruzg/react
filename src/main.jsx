import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HookApp } from './HookApp'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <HookApp></HookApp>
    // <FormWithCustomHook></FormWthCustomHook>
    <MultipleCustomHooks></MultipleCustomHooks>
  /* </React.StrictMode>, */
)
