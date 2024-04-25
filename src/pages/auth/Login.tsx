import Box from "@mui/material/Box";
import GoogleAuth from "../../components/googleauth/GoogleAuth";

const Login = () => {
  return (
    <>
      <Box
        boxShadow={3}
        width={280}
        height={45}
        borderRadius={6}
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <GoogleAuth shape="circle" size="large" type="standard" width={275} />
      </Box>
      {/* <GoogleAuth shape="circle" size="large" type="standard" width={275} /> */}
    </>
  );
};

export default Login;
