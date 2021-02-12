import React, {useCallback} from 'react';
import './socialauth.scss';
import { useTranslation } from 'react-i18next';
import {
  faSnapchatGhost,
  faGoogle,
  faFacebookSquare,
  faSnapchatSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { AuthButtons } from '../../atoms/index';
import "firebase/auth";
import firebase from "firebase/app";
import { firebaseConfig } from "../../../config";

console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

const SocialAuths = () => {
  // const {toggle, theme} = useContext(ThemeContext);
  const { t } = useTranslation();

  const googleAuthMethod = useCallback(async() => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const userData = await firebase.auth().signInWithPopup(googleAuthProvider);
    console.log(userData)
  }
  )

  const facebookAuthMethod = useCallback( async() => {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    const userData = await firebase.auth().signInWithPopup(facebookAuthProvider);
    console.log(userData)
  })

  const twitterAuthMethod = useCallback( async() => {
    const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
    const userData = await firebase.auth().signInWithPopup(twitterAuthProvider);
    console.log(userData)
  })

  return (
    <div className="social-auth-container">
      <div className="items">
        <AuthButtons
          provider="google"
          title={t('authbuttons.google.title')}
          icon={faGoogle}
          style={{ color: '#15AABF' }}
          action={googleAuthMethod}
        />
      </div>
      <div className="items">
        <AuthButtons
          provider="facebook"
          title={t('authbuttons.facebook.title')}
          icon={faFacebookSquare}
          style={{ color: '#4267B2' }}
          action={facebookAuthMethod}
        />
      </div>
      <div className="items">
        <AuthButtons
          provider="twitter"
          title={t('authbuttons.twitter.title')}
          icon={faTwitterSquare}
          style={{ color: '#1DA1F2' }}
          action={twitterAuthMethod}
        />
      </div>
      {/* <div className="items">
        <AuthButtons
          provider="snapchat"
          title={t('authbuttons.snapchat.title')}
          icon={faSnapchatSquare}
          style={{ color: 'black' }}
        />
      </div> */}
    </div>
  );
};

export default SocialAuths;
