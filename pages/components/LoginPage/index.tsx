import { Header } from "../Header";
import LoginForm from "../LoginForm";
import * as S from "./styled";

const LoginPage = () => {
  return (
    <div>
      {" "}
      <Header />
      <S.LoginPage>
        <LoginForm />
      </S.LoginPage>
    </div>
  );
};

export default LoginPage;
