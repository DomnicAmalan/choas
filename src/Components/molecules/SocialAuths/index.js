import React from 'react';
import './socialauth.scss';
import { useTranslation } from 'react-i18next';
import {
  faSnapchatGhost,
  faGoogle,
  faFacebookSquare,
  faSnapchatSquare,
} from '@fortawesome/free-brands-svg-icons';
import { AuthButtons } from '../../atoms/index';

const SocialAuths = () => {
  // const {toggle, theme} = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="social-auth-container">
      <div className="items">
        <AuthButtons
          provider="google"
          title={t('authbuttons.google.title')}
          icon={faGoogle}
          style={{ color: '#15AABF' }}
        />
      </div>
      <div className="items">
        <AuthButtons
          provider="facebook"
          title={t('authbuttons.facebook.title')}
          icon={faFacebookSquare}
          style={{ color: '#4267B2' }}
        />
      </div>
      <div className="items">
        <AuthButtons
          provider="snapchat"
          title={t('authbuttons.snapchat.title')}
          icon={faSnapchatSquare}
          style={{ color: 'black' }}
        />
      </div>
    </div>
  );
};

export default SocialAuths;
