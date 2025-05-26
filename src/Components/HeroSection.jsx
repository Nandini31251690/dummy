import { TypeAnimation } from 'react-type-animation';
import InfiniteScrollLogos from '../Utilis/InfiniteScrollLogos';
const HeroSection = () => {
  return (
    <div className='w-screen min-h-screen bg-[#9a99f2]'>
    <div className='mt-20 px-28 pb-24 min-h-screen'>
      <div className="flex justify-between items-center  "> 
        <div>
          <div className='font-bold text-5xl'> Kritika-Enterprises</div>
          <div className="mt-9 text ">
            <h2 className="text-2xl font-semibold ">
              <span className="inline-flex items-baseline">
                We sell &nbsp;
                <span className="text-[#d6d4f0] text-3xl">
                  <TypeAnimation
                    sequence={[
                      'Laptops', 500,
                      'Medical Equipments', 500,
                      'Monitors', 500,
                      'Desktops', 500,
                      'Gaming Laptops', 500,
                      'Workstations', 500,
                      'IT Accessories', 500
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </span>
              </span>
            </h2>
            <p className="text-xl w-3/5 mt-4">
              At Kritika Enterprises, we specialize in providing high-performance hardware solutions for both businesses and individual consumers.
              We deliver only the best from leading global brands like HP, Dell, and ASUS. Whether you're a hospital, a startup, or a home user, 
              we ensure fast, reliable tech solutions with unmatched support.
            </p>
          </div>
        </div>
        <div>
          image
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl text-center font-bold pt-10 mb-8">
          Our Associated Brands 
        </h2>
        <InfiniteScrollLogos />
      </div>

     
    </div>
     {/* contact-us */}
    <div className="mt-16 pb-20">
      <div className="max-w-md mx-auto  p-8">
        <h2 className="text-2xl font-bold mb-4 text-left">Contact Us</h2>
        </div>
        <div className="ml-16 space-y-2">
          <div>
            <span className="font-semibold">Email:</span> kritikaenterprises@email.com
          </div>
          <div>
            <span className="font-semibold">Phone:</span> +91 98765 43210
          </div>
          <div>
            <span className="font-semibold">Address:</span> 123, Main Street, New Delhi, India
          </div>
        </div>
    </div>
    </div>
    
  );
}

export default HeroSection