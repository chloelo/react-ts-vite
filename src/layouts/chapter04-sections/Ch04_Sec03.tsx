import { SectionLayout } from '../SectionLayout';

const Ch04_Sec03 = () => {
  return (
    <>
      <SectionLayout chIdx={3} secIdx={2}>
        <h4>如何寫一個 Effect</h4>
        <ol>
          <li>
            <p>
              宣告一個 Effect <br />
              預設情況下，你的 Effect 會在每一次 render 後都運行
            </p>
          </li>
          <li>
            <p>
              指定 Effect 的 dependencies (誰與 effect 有相依) <br />
              多數 Effect
              只應在需要時重新運行，而不是在每次渲染後重新運行，例如，淡入動畫應該只在組件出現時觸發。與聊天室的連接和斷開連接應該只在組件出現和消失時發生，或者在聊天室發生變化時發生。您將學習如何通過指定依賴項來控制它
            </p>
          </li>
          <li>
            <p>
              如果有需要的時候增加”清除 Effect 函式” <br />
              某些 Effects 需要指定如何停止、撤消或清理它們正在做的任何事情。例如，“connect” 需要“disconnect”，“subscribe” 需要 “unsubscribe”， “fetch” 需要 “cancel” 或 “ignore”。您將學習如何通過返回清理函數來執行此操作
            </p>
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch04_Sec03;
