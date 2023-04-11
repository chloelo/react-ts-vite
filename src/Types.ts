export type ChildrenProps = {
  children: React.ReactNode;
}
export type ReactElement = React.ReactElement;

type Section = {
  name: string;
  title: string;
  id: string;
  challenges: string[]
}
export type Chapter = {
  id: string;
  title: string;
  sections: Section[];
  name: string;
};

export type FormEventProps = React.FormEvent<HTMLFormElement>
export type ChangeEventInputProps = React.ChangeEvent<HTMLInputElement>
export type ChangeEventSelectProps = React.ChangeEvent<HTMLSelectElement>
export type PointerEventDivProps = React.PointerEvent<HTMLDivElement>
export type MouseEventImgProps = React.MouseEvent<HTMLImageElement, MouseEvent>