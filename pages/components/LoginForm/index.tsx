import * as S from "./styled";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const LoginForm = () => {
  return (
    <S.LoginForm>
      <TextField id="username"></TextField>
      <br />
      <TextField id="password"></TextField>
      <Button>Login</Button>
    </S.LoginForm>
  );
};

export default LoginForm;
