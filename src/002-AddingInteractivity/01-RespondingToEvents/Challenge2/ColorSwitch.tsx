type ColorSwitchProps = () => void

export default function ColorSwitch({
  onChangeColor
}: { onChangeColor: ColorSwitchProps }) {
  return (
    // <button>
    //   Change color
    // </button>
    <button onClick={(e)=>{
      e.stopPropagation();
      onChangeColor()
    }}>
      Change color
    </button>
  );
}
