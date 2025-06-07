import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 interface SignUpModalProps
 {
  show: boolean;
  onClose:()=> void;
  onSuccess: () => void; 
 }
 function SignUpModal({show, onClose, onSuccess}: SignUpModalProps) {
  const [formData,setFormData]= useState({
    name:"",
    email: "",
    password : ""
  });
  const {setUser} = useAuth();
  const errs: { [key: string]: string } = {};
  const [errors, setErrors] = useState<{ [key:string]: string}>({})
  if(!show) return null;

  const validate =()=>{
      if(!formData.name.trim())  errs.name="Name is required";
      if(!formData.email.trim())  errs.email="Email is required";
      if(!formData.password.trim())  errs.password="Password is required";
      setErrors(errs);
      return Object.keys(errs).length===0;
  }

  const handleSubmit = (e: React.FormEvent)=>
  {
    toast.success("Signup successful! Welcome aboard 🎉");    
    e.preventDefault();
    setUser(formData);
    if(!validate())
        return;
    onClose();    
    onSuccess();   
  };

  const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log('Called');
    const {name, value}= e.target;
    setFormData(prev=>(
      {
        ...prev,
        [name]: value,
      }
    ))
  }

   return (
<>
      {show && (
        <div  
        role="dialog"
        aria-modal="true" 
        className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => onClose()}
                aria-label="Close Sign Up Modal"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Create Your Account</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.name && <p className="font-bold text-red-500 mb-4">{errors.name}</p>}

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
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
</>
   )
  
 }
 
 export default SignUpModal
 