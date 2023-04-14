// import "./index.css";

import { useState } from 'react';

import ChallengeIFrame from '../../../ChallengeIFrame';
import ChallengeLayout from '../../../ChallengeLayout';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  const challenge = (
    <>
      <p>說明待完成，之後補上</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={0}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='great-night-jbdwef'
        solutionIFrameTitle='patient-feather-ddx5bb'
      >
        <p>官網提供原用純 JS 寫法：</p>
        <ChallengeIFrame title='eloquent-ace-nplpp9' />
        <p>state跟事件練習，表單要可以編輯，並同步顯示輸入的文字內容</p>
        <div className="challenge03-01-wrap">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsEditing(!isEditing);
            }}
          >
            <label>
              First name:{' '}
              {isEditing ? (
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              ) : (
                <b>{firstName}</b>
              )}
            </label>
            <label>
              Last name:{' '}
              {isEditing ? (
                <input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              ) : (
                <b>{lastName}</b>
              )}
            </label>
            <button type='submit'>{isEditing ? 'Save' : 'Edit'} Profile</button>
            <p>
              <i>
                Hello, {firstName} {lastName}!
              </i>
            </p>
          </form>
          <div
            style={{
              marginTop: '40px',
              paddingTop: '20px',
              borderTop: '2px solid gray',
            }}
          >
            <h2>todo steps：</h2>
            <ol>
              <li>
                思考有哪些狀態，並建立狀態變數
                <ol>
                  <li>firstName</li>
                  <li>lastName</li>
                  <li>按鈕文字</li>
                  <li>表單是否可編輯</li>
                </ol>
              </li>
              <li>
                綁定的事件列表
                <ol>
                  <li>按鈕點擊：切換表單欄位是否可編輯還是顯示純文字</li>
                  <li>firstName 輸入</li>
                  <li>lastName變數 輸入</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </ChallengeLayout>

      {/* <form>
      <label>
        First name:{' '}
        <b>Jane</b>
        <input />
      </label>
      <label>
        Last name:{' '}
        <b>Jacobs</b>
        <input />
      </label>
      <button type="submit">
        Edit Profile
      </button>
      <p><i>Hello, Jane Jacobs!</i></p>
    </form> */}
    </>
  );
}
