import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

 interface LoginModalProps
 {
  show: boolean;
  onClose:()=> void;
 }
function LoginModal({show, onClose}: LoginModalProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const errs: { [key: string]: string } = {};
  const [errors, setErrors] = useState<{ [key:string]: string}>({})
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value}= e.target;
    setFormData(prev=>(
      {
        ...prev,
        [name]: value,
      }
    ))
  }

  const validate =()=>{
      if(!formData.email.trim())  errs.email="Email is required";
      if(!formData.password.trim())  errs.password="Password is required";
      setErrors(errs);
      return Object.keys(errs).length===0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.log('error')
      errs.users="No user found. Please sign up first."
      setErrors(errs);
      return;
    }

    if(!validate())
        return;

    if (user.email === formData.email && user.password === formData.password) {
      navigate("/dashboard");
    } else {
    errs.invalid="Invalid credentials!";
    setErrors(errs);
    }
  };

   return (
<> {show && (
        <div  
        role="dialog"
        aria-modal="true" 
        className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            <button
                aria-label="Close Sign Up Modal"
                onClick={() => onClose()}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Login Your Account</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.email && <p className="font-bold text-red-500 mb-4">{errors.email}</p>}
              <input
                type="password"
                   name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.password && <p className="font-bold text-red-500 mb-4">{errors.password}</p>}

              <button
                type="submit"
                className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700"                
              >
                Login
              </button>
              {errors.invalid && <div className=" font-bold text-red-500 mb-4">{errors.invalid}</div>}
              {errors.users && <div className=" font-bold text-red-500 mb-4">{errors.users}</div>}
            </form>
          </div>
        </div>
)}
     
</>
   )
 }
 
 export default LoginModal
 