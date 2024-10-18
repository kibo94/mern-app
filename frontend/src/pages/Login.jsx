import { useState } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState.formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Login and start setting goals</p>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={email}
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button onSubmit={onSubmit} type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Login;
