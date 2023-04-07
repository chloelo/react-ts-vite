export type StoryProps = {
  id: number | string;
  label: string;
};
export type StoriesProps = StoryProps[];

export default function StoryTray({ stories }: { stories: StoriesProps }) {
  // stories.push({
  //   id: 'create',
  //   label: 'Create Story'
  // });
  // Copy the array!
  let storiesToDisplay = stories.slice();

  // Does not affect the original array:
  storiesToDisplay.push({
    id: "create",
    label: "Create Story",
  });
  return (
    <ul>
      {storiesToDisplay.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      {/* <li>Create Story</li> */}
    </ul>
  );
}

// 此挑戰的重點在：不要直接改變 props，如果要改變，複製一份資料出來再去改動
// 提醒：有些array方法會改到原陣列，要使用不會改到原資料的方法
