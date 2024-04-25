import {
  CredentialResponse,
  GoogleOAuthProvider,
  GoogleLogin,
} from "@react-oauth/google";
import { GoogleAuthProps, initGoogleAuth } from "./GoogleAuthTypes";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const GoogleAuth = ({
  type,
  theme,
  size,
  shape,
  logo_alignment,
  width,
  locale,
}: GoogleAuthProps) => {
  const responseGoogle = (response: CredentialResponse) => {
    console.log("clientId", response.clientId);
    console.log("credential", response.credential);
    console.log("select_by", response.select_by);
  };

  const propsGA: GoogleAuthProps = {
    ...initGoogleAuth,
    type,
    theme,
    size,
    shape,
    logo_alignment,
    width,
    locale,
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLogin {...propsGA} onSuccess={responseGoogle} />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
