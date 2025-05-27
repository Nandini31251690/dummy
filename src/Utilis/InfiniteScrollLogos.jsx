import Acer from "../assets/Acer.png";
import Amd from "../assets/amd.png";
import Asus from "../assets/Asus.png";
import Crucial from "../assets/crucial.png";
import Dahua from "../assets/dahua.png";
import Dell from "../assets/dell.png";
import HP from "../assets/hp.png";
import Intel from "../assets/intel.png";
import Lenovo from "../assets/lenovo.png";
import LG from "../assets/lg.png";
import Msi from "../assets/msi.png";
import Samsung from "../assets/samsung.png";
import Seagate from "../assets/seagate.png";
import Sony from "../assets/sony.png";
import Thermaltake from "../assets/thermaltake.png";
import Toshiba from "../assets/toshiba.png";
import Viewsonic from "../assets/viewsonic.png";
import WD from "../assets/wd.png";

const allLogos = [Acer, Amd, Asus, Crucial, Dahua, Dell, HP, Intel, Lenovo, LG, Msi, Samsung, Seagate, Sony, Thermaltake, Toshiba, Viewsonic, WD];
const midpoint = Math.ceil(allLogos.length / 2);
const leftLogos = allLogos.slice(0, midpoint);
const rightLogos = allLogos.slice(midpoint);

const InfiniteScrollLogos = () => {
  return (
    <div className="overflow-hidden py-8 space-y-4 ">
      {/* Scroll Left */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-scroll-left">
          {[...leftLogos, ...leftLogos].map((logo, index) => (
            <img
              key={`left-${index}`}
              src={logo}
              alt={`Brand-left-${index}`}
              className="inline-block h-16 sm:h-20 md:h-24 w-24 sm:w-32 md:w-40 object-contain mx-2"
            />
          ))}
        </div>
      </div>

      {/* Scroll Right */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-scroll-right">
          {[...rightLogos, ...rightLogos].map((logo, index) => (
            <img
              key={`right-${index}`}
              src={logo}
              alt={`Brand-right-${index}`}
              className="inline-block h-16 sm:h-20 md:h-24 w-24 sm:w-32 md:w-40 object-contain mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollLogos;
