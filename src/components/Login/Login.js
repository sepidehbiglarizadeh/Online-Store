import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Link, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import loginUser from "../../services/loginService";
import { useAuthActions,useAuth } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

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
  const auth= useAuth();
  const query= useQuery();
  const redirect= query.get("redirect") || "/";

  useEffect(() => {
    if (auth) history.push(redirect);
  }, [auth, redirect]);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setError(null);
      setAuth(data);
      history.push(redirect);
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
        <Link to={`/signup?redirect=${redirect}`}>
          <p style={{ marginTop: "15px" }}>Not sign-up yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
