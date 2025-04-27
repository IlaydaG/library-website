import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // ikonlar için lucide-react kuruluysa
import "./Login.css"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password) {
      navigate("/");
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div className="login-bg d-flex align-items-center justify-content-center">
      <div className="login-card card shadow p-4">
        <h2 className="text-center mb-4">🛡️ Giriş Yap</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Kullanıcı Adı</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Kullanıcı adınızı girin"
            />
          </div>
          <div className="mb-3 position-relative">
            <label className="form-label">Şifre</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifrenizi girin"
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Giriş Yap
          </button>
        </form>
        <div  className="mt-3 text-center small">
            <div  className="links">
                    <a href="#" className="text-decoration-none me-3">
                    Şifremi unuttum
                </a>
                <a href="#" className="text-decoration-none">
                    Kayıt Ol
                </a>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
