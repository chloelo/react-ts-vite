export default function HelloReact() {
  return (<>
    <h1>Hello React!</h1>
    <ol>
      <li>
        定義元件開頭大寫，小寫的標籤就會被React認作是Html 原生標籤
      </li>
      <li>
        標籤要有結尾
      </li>
      <li>
        最外層只能有一個標籤
      </li>
      <li>
        不要定義Function component 裡又定義別的Function component
      </li>
      <li>
        return 後面不能直接換行
      </li>
    </ol>
  </>)
}