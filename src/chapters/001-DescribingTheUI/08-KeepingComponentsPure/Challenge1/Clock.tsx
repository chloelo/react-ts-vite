type ClockProps = {
  time: Date;
};
export default function Clock({ time }: ClockProps) {
  let hours = time.getHours();
  // let hours = 3 // 測試如果是night，畫面已沒有變
  let setHour = 3
  let className = 'day';
  let className2 = 'day';
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  }
  if (setHour >= 0 && setHour <= 6) {
    className2 = 'night';
  }
  return (
    <>
      <p>目前時間：</p>
      <h2 className={className}>{time.toLocaleTimeString()}</h2>
      <p>指定時間半夜三點：</p>
      <h2 className={className2}>{setHour}</h2>
    </>
  );
}
