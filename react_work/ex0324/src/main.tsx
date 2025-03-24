import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './test.tsx'

 // 태그를 사용하게 되면 그안에있는 함수가 호출되면서 
 // retrun되는 내용이 랜더링 된다.

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Test />
  // </StrictMode>,
)
