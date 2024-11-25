import './nav.css';
import {BiHome, BiUser, BiCodeCurly, BiSolidBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {Link} from 'react-scroll';

function Nav() {
  return (
    <nav>
      <Link to="header" spy={true} activeClass='active' ><BiHome /></Link>
      <Link to="about" spy={true} activeClass='active'><BiUser /></Link>
      <Link to="experience" spy={true} activeClass='active'><BiCodeCurly /></Link>
      <Link to="services" spy={true} activeClass='active '><RiServiceLine /></Link>
      <Link to="portfolio" spy={true} activeClass='active'><BiSolidBook /></Link>
      <Link to="contact" spy={true} activeClass='active'><BiMessageSquareDetail /></Link>
    </nav>
  )
}

export default Nav
