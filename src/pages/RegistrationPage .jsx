import { useDispatch, useSelector } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiRegister(values));
  };

  return (
    <div>
      <RegistrationForm handleSubmit={handleSubmit} />
    </div>
  );
};
export default RegisterPage;
