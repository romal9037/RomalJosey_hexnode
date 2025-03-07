import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
    {
        image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80",
        text: "Most complete MDM solution I found, and I tested many of them, including major names",
        name: "Dalibor Kruljic",
        position: "KAMELEYA LTD",
    },
    {
        image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80",
        text: "It seemed to be in-line with everything we were looking at.",
        name: "Justin Modrak",
        position: "Technology Coordinator, East Troy Community School District",
    },
];

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="container my-5" id="contact">
        <div className="testimonial-container">
            <h2 className="title">What our customers say</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                        <div className="testimonial-content">
                            <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
                            <div className="testimonial-text">
                                <p>"{testimonial.text}"</p>
                                <h4>{testimonial.name}</h4>
                                <span>{testimonial.position}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
        </section>
    );
};

export default Carousel;
