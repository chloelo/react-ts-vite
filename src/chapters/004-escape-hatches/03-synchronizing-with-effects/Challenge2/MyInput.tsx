import {
  useEffect,
  useRef,
} from 'react';

type MyInputProps = {
  shouldFocus: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function MyInput({
  shouldFocus,
  value,
  onChange,
}: MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    if (shouldFocus) ref.current!.focus();
  }, [shouldFocus]);
  return <input ref={ref} value={value} onChange={onChange} />;
}
