import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
  // axios
  //   .post("http://localhost:3001/users",values)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
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
        <Link to='/signup'>
            <p style={{marginTop:"15px"}}>Not sign-up yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
