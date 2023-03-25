
import { Person } from './Challenge2'

export function getImageUrl(imageId: string, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}


export function getImageUrl2(person:Person, thumbnailSize:string) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    thumbnailSize +
    '.jpg'
  );
}

