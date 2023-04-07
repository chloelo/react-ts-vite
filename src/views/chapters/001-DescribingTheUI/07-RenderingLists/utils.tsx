export type PersonProps = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};

export function getImageUrl(person: PersonProps) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
