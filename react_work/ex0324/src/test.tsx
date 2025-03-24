import BB from "./BB";
function Test(){
    // console.log("test")
    return(
    <>
    <div>
        {/* {BB()} -> 가독성이 좋지않다*/}
        {BB({aa: 32, bb: 42})}
        <BB aa ="10" bb="20"></BB> {/*읽기 편하다*/}
        <h1>TEST</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto eveniet porro itaque natus eaque laborum, nisi mollitia quod dolor exercitationem et. Minus, aliquid tenetur ipsa ullam architecto vitae exercitationem!</p>
    </div>
    </>
    )
}

export default Test;