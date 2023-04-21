type SearchButtonProps = {
  clickFn: () => void;
};
export default function SearchButton({ clickFn }: SearchButtonProps) {
  return (
    <button className='block mb-3' onClick={clickFn}>
      Search
    </button>
  );
}
