import './Tabs.scss';
import { NavLink } from "react-router-dom";
const Tabs = () => {

  return (
    <nav className='tabs'>
      <NavLink className="tab" to="/winners-by-category" > Winners by category </NavLink>
      <NavLink className="tab" to="/winners-by-gender" > Winners by gender </NavLink>
      <NavLink className="tab" to="/winners-by-country" > Winners by country </NavLink>
      <NavLink className="tab" to="/top-ten" > Top 10 winners  </NavLink>
      <NavLink className="tab" to="/winners-by-year" > Winners by year </NavLink>
      <NavLink className="tab" to="/awards-by-category" > Awards by category </NavLink>
      <NavLink className="tab" to="/" > Stäng mapp </NavLink>
    </nav>
  );
};

export default Tabs;
