export type PersonProps = {
  name: string;
  imageId: string;
};

// import { PersonProps } from './index'
export function getImageUrl(person: PersonProps, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
