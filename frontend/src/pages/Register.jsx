import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
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
        <FaUser /> Register
      </h1>
      <p>Please create a account</p>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={name}
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
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
            <input
              type="password2"
              className="form-control"
              id="password2"
              name="password2"
              placeholder="Confirm password"
              value={password2}
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

export default Register;
