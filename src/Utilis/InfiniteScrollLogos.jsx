import Asus from "../assets/Asus.jpeg";
import HP from "../assets/hp.jpeg";
import Dell from "../assets/dell.jpg"; 

const logos = [Asus, HP, Dell];
// group-hover:[animation-play-state:paused]

const InfiniteScrollLogos = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap   py-8  group">
      <div className="inline-block animate-scroll-left ">
        {[...logos, ...logos,...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand-${index}`}
            className="inline-block h-16 sm:h-20 md:h-24 w-24 sm:w-32 md:w-40 object-contain mx-2"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollLogos;
