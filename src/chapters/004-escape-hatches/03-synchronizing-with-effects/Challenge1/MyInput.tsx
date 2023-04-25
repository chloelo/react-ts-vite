import {
  useEffect,
  useRef,
} from 'react';

type MyInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function MyInput({ value, onChange }: MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  // TODO: This doesn't quite work. Fix it.
  // ref.current.focus()
  useEffect(() => {
    ref.current!.focus();
  }, []);
  return <input ref={ref} value={value} onChange={onChange} />;
}
