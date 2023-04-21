// export default function SearchInput() {
//   return (
//     <input
//       placeholder="Looking for something?"
//     />
//   );
// }
import { forwardRef } from 'react';

const SearchInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input {...props} ref={ref} />;
});
export default SearchInput;
