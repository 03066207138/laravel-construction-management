import { useContext } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/Auth"; // ✅ IMPORsTANT


const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ IMPORTANT

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      // ❌ login failed
      if (result.status === false) {
        toast.error(result.message);
        return;
      }

      // ✅ login success
      const userInfo = {
        id: result.id,
        token: result.token,
      };

      // ✅ update context (THIS WAS MISSING)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      login(userInfo);

      toast.success(result.message);
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <main>
        <div className="container my-5">
          <div className="login-form py-5">
            <div
              className="card border-0 shadow-sm p-4 mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <div className="card-body">
                <h4 className="text-center">Login</h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter email"
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Enter password"
                      {...register("password", {
                        required: "This field is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Login;
