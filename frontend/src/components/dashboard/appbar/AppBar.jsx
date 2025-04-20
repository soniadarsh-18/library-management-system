import "./appbar.scss";
import { GiBookAura } from "react-icons/gi";
import {
  AiOutlineMenu,
} from "react-icons/ai";
import {FaRegMoon} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { FiSun } from "react-icons/fi";
import { toggleTheme } from "../../../store/slices/themeSlice";
import { Link } from "react-router-dom";
function AppBar({ open, setOpen }) {
 
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
 
  return (
    <div className="appbar bg__accent ">
      <div className="left">
        {/* sidebar toggler */}
        <button
          className="btn__icon btn__hamburger text__color"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <AiOutlineMenu className="icon" />
        </button>

        {/* logo */}
        <Link to="/" className="logo text__primary">
          <span>VIDYA BHUSHAN</span>
        </Link>
      </div>

      {/* righside icons and profile */}
      <div className="right">

     
      </div>
    </div>
  );
}

export default AppBar;
