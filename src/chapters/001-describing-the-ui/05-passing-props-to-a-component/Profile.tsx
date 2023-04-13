import { getImageUrl } from "./utils.js";

type ProfileProps = {
  userName: string;
  imageId: string;
  profession: string;
  awardsList: string[];
  discovered: string;
  imageSize: number;
};
const Profile = ({
  userName,
  imageId,
  profession,
  awardsList,
  discovered,
  imageSize = 70,
}: ProfileProps) => {
  return (
    <section className="profile">
      <h2>{userName}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={userName}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardsList.length} </b>
          {/* ({awardsList.map((award: string) =>
            <span key={award}>{award}, </span>
          )}) */}
          {awardsList.join(", ")}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
};
export default Profile;
