import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
    <nav className="bg-green-600 text-white p-4 flex items-center space-x-6">
      <Link to="/" className="font-semibold text-2xl">Green Pulse</Link>
      <Link to="/" className="font-semibold">Home</Link>
      <Link to="/dashboard" className="font-semibold">Dashboard</Link>
    </nav>
</>
  )
}

export default NavBar
