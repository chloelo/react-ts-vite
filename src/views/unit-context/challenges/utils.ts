import { PlaceItem } from './index'
export function getImageUrl(place: PlaceItem) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}
