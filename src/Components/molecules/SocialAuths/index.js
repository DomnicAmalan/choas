import React from 'react'
import "./socialauth.scss";
import {AuthButtons} from '../../atoms/index'
import { useTranslation } from 'react-i18next';
import {faSnapchatGhost, faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons'

const SocialAuths = () => {
  // const {toggle, theme} = useContext(ThemeContext);
  const {t, i18n} = useTranslation();

  return (
    <div className="social-auth-container">
      <div className="items">
      <AuthButtons provider={"google"} title={t('authbuttons.google.title')} icon={faGoogle} />
      </div>
      <div className="items">
      <AuthButtons provider={"facebook"} title={t('authbuttons.facebook.title')} icon={faFacebook} style={{color: "#4267B2"}} />
      </div>
      <div className="items">
      <AuthButtons provider={"snapchat"} title={t('authbuttons.snapchat.title')} icon={faSnapchatGhost} style={{color: "#FFFC00"}} />
      </div>
      
      
      
    </div>
  )
}

export default SocialAuths