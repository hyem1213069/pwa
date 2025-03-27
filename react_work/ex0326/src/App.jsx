import { useEffect, useState } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'

// useTate useEffect useRef useMemo useCallback 훅
// 값이 변경 될 시에 화면이 새 렌더링

const url = "https://zgrjjnifqoactpuqolao.supabase.co";
const pwd = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncmpqbmlmcW9hY3RwdXFvbGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDc0NTgsImV4cCI6MjA1NjgyMzQ1OH0._Vl-6CRKdMjeDRyNoxlfect7sgusZ7L0N5OYu0a5hT0";
const supabase = createClient(url, pwd);

function App() {
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState([1, 2, 3, 4]);

  const [data, setData] = useState([
    { review_num: 1, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "홍길동", title: "제목1", review_txt: "리뷰입니다11." },
    { review_num: 2, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "박길동", title: "제목2", review_txt: "리뷰입니다22." },
    { review_num: 3, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "이길동", title: "제목3", review_txt: "리뷰입니다33." }
  ]);

  // 처음에 한번만 콜백함수 호출하라
  useEffect(() => {
    const doa = async () => {
      // 총페이지 개수 구하기
      const total = (await supabase.from('review').select()).data.length;
      let totalPage = Math.ceil(total / 5); // 29/5 = 5.XXX 6 [1,2,3,4,5,6]
      
      const temp = [];
      for (let i = 0; i < totalPage; i++){
        temp.push(i+1);
      }
      
      setPages(temp);
      
      // const temp = Array.from({length: totalPage}, (_,i) => i + 1);
      // console.log(`temp=`);
      // confirm(temp)

      const params = new URLSearchParams(location.search);
      const pageNum = params.get('pageNum') ?? "1";

      const [from, to] = [(parseInt(pageNum) - 1) * 5, parseInt(pageNum) * 5 - 1]

      const res = await supabase.from('review').select().range(from, to);
      setData(res.data);
    }
    doa();

  }, []);

  console.log("호출댐");

  // const reData = data.map(item => {
  //   // console.log(item);
  //   return `<li>내용</li>`;
  // })
  // console.log(retData);

  // useState를 사용하게 되면 재랜더링이 일어난다



  const getReview = async () => {
    const res = await supabase.from('review').select();
    setData(res.data);
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {
          pages.map((item) => (
            <a key={item} href={`?pageNum=${item}`}>{item}</a>
          ))
        }
      </div>
      <h1>count = {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>count 증가</button>
      <button onClick={getReview}>review데이터가저오기</button>
      {
        data.map(item => (
          <div key={item.review_num}>
            <div><h2>게시글{item.title}</h2></div>
            <div>{item.review_txt}</div>
            <div>작성자{item.name}</div>
          </div>
        ))
      }

    </>
  )
}

export default App
