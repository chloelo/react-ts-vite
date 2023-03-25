
import { Children } from 'react';
import './index.css'

type CardProps = {
  title: string;
  content?: string;
  userName?: string;
  url?: string;
  size?: number;
}

export default function Profile() {
  return (
    <div>
      <h2>Challenge 3 of 3: Passing JSX in a children prop </h2>
      {/* <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
      </div> */}
      {/* <Card
        title='Photo'
        userName="Aklilu Lemma"
        url='https://i.imgur.com/OKS67lhm.jpg'
        size={70}
      />
      <Card
        title='About'
        content='Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.'
      /> */}
      <Card title='Photo'>
        <>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </>
      </Card>
      <Card title='About'>
        <>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </>
      </Card>
    </div>
  );
}
function Card({ title, children }: { title: string, children: React.ReactElement }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

// function Card({ title, content, userName, url, size}: CardProps) {
//   return (
//     <div className="card">
//       <div className="card-content">
//         <h1>{title}</h1>
//         {
//           content && <p>{content}</p>
//         }
//         {
//           url && (
//             <img
//               className="avatar"
//               src={url}
//               alt={userName}
//               width={size}
//               height={size}
//             />
//           )
//         }

//       </div>
//     </div>
//   )
// }