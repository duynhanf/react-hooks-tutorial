import React from "react";
import { useForm } from "../../hooks/useForm";

const LoginForm = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div>
      <input
        type="email"
        name="email"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default LoginForm;
