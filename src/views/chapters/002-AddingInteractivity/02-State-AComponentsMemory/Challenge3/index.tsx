import { useState } from "react";

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    // const [message, setMessage] = useState('');
    return (
      <>
        <h1>Challenge 3 of 4: Fix a crash </h1>
        <p>
          原程式碼將useState宣告在判斷條件式裡，無法正常render，把useState移至最上方即可
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Sending: "${message}"`);
            setIsSent(true);
          }}
        >
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </>
    );
  }
}
