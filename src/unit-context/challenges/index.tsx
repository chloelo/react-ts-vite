import { useState } from 'react';
import { places } from './data';
import { getImageUrl } from './utils';
import { useImageSize, ImageSizeProvider } from './contexts/ImageSizeContext'


export interface PlaceItem {
  id: number;
  name: string;
  description: string;
  imageId: string;
}

interface DataPlaceProps {
  place: PlaceItem;
  imageSize?: number;
}

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <ImageSizeProvider imageSize={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List />
      </ImageSizeProvider>
    </>
  )
}

function List() {
  const listItems = places.map((place) =>
    <li key={place.id}>
      <Place
        place={place}

      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }: DataPlaceProps) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }: DataPlaceProps) {
  const imageSize = useImageSize()
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
