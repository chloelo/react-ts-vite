export default function App() {
  return (
    <>
      <h1>此章節沒有挑戰任務</h1>
      <ul>
        <li>
          React 在 App root.render()
          會有第一次的初始渲染，之後如果要渲染畫面，就是用hook的方式，告知React哪裡要重新渲染
        </li>
        <li>
          就像是在餐廳點餐，預設一進到餐廳會有一杯水(初始渲染)，之後跟服務員(React這個程式)說我要點甜點、奶茶、布丁…服務員就要去廚房(Component
          Kitchen)請廚房拿你點的東西，最後再呈現到你面前(畫面再次渲染)
        </li>
      </ul>
    </>
  );
}
