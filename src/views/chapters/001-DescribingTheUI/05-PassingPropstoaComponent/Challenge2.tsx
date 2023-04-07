import { getImageUrl2 } from "./utils.js";

export type Person = {
  name: string;
  imageId: string;
};
type AvatarProps = {
  person: Person;
  size: number;
};

function Avatar({ person, size }: AvatarProps) {
  let thumbnailSize = size < 90 ? "s" : "b";
  return (
    <img
      className="avatar"
      src={getImageUrl2(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}
