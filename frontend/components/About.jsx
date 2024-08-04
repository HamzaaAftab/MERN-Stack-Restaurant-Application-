
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className='banner'>
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The Only thing we are Serios about is Food</p>
                </div>
                <p className='ti'>
                Welcome to our culinary haven, where every meal is a celebration. Delight in our diverse menu, brimming with fresh, locally sourced ingredients crafted into mouthwatering dishes. Enjoy a warm, inviting ambiance and exceptional service that make every visit unforgettable. 
                </p>
                <Link to={"/"}>
                Explore Menu{" "} 
                <span><HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About
