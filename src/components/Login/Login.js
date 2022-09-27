import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
import loginUser from "../../services/loginService";
import { useAuthActions } from "../../Providers/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const setAuth = useAuthActions();

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setError(null);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      history.push("/");
    } catch (err) {
      if (err.response && err.response.data.message)
        console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <button
          style={{ width: "100%" }}
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
        >
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to="/signup">
          <p style={{ marginTop: "15px" }}>Not sign-up yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
