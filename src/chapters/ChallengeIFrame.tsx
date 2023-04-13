type ChallengeIFrameProps = {
  title: string;
};
const ChallengeIFrame = ({ title }: ChallengeIFrameProps) => {
  return (
    <div className='iframe-wrap'>
      <iframe
        src={`https://codesandbox.io/embed/${title}?fontsize=14&hidenavigation=1&theme=dark`}
        title={title}
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
    </div>
  );
};
export default ChallengeIFrame;
