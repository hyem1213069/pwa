import './App.css'
import { Carousel } from 'antd';
import { Image } from "antd";
import MyList from "@components/MyList.jsx";

function App() {

  return (
    <>
    <h1 className={`text-5xl underline`}>Hello World</h1>
      <MyList/>
      <Carousel className={`m3`} autoplay>
        <div className={`w-full h-[400px] p-3 bg-gray-200`}>
          <h3 className={`text-4xl underline`}>1</h3>
          <p>문장을 넣으시면 됩니다. 이 부분슬라이드 됩니다</p>
          <Image src="https://zgrjjnifqoactpuqolao.supabase.co/storage/v1/object/public/images//0d0307fe-0a2a-45fd-bd02-533d9fd205e1.jpg" alt=""/>
        </div>
        <div className={`w-full h-[400px] p-3 bg-gray-200`}>
          <h3 className={`text-4xl underline`}>2</h3>
          <p>문장을 넣으시면 됩니다. 이 부분슬라이드 됩니다</p>
        </div>
        <div className={`w-full h-[400px] p-3 bg-gray-200`}>
          <h3 className={`text-4xl underline`} >3</h3>
          <p>문장을 넣으시면 됩니다. 이 부분슬라이드 됩니다</p>
        </div>
        <div className={`w-full h-[400px] p-3 bg-gray-200`}>
          <h3 className={`text-4xl underline`}>4</h3>
          <p>문장을 넣으시면 됩니다. 이 부분슬라이드 됩니다</p>
        </div>
      </Carousel>
    </>
  )
}

export default App
