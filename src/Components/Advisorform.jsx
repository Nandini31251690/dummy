const Advisorform = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
      <div className="flex flex-col md:w-2/3 bg-white p-8 rounded-xl shadow-md"> {/* 65% width */}
        <h1 className="text-3xl font-bold text-[#040273] mb-6">Book a session!</h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-[#3c3b85] mb-1">Your Topic of Interest*</label>
            <select required className="w-full p-3 border border-gray-300 rounded text-base">
              <option value="">Select Product</option>
              <option value="Monitors">Monitors</option>
              <option value="LED screens">LED screens</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-[#3c3b85] mb-1">Enter Name</label>
            <input type="text" placeholder="Enter Name" required className="w-full p-3 border border-gray-300 rounded text-base" />
          </div>
          <div>
            <label className="block font-medium text-[#3c3b85] mb-1">Enter Email</label>
            <input type="email" placeholder="Enter Email" required className="w-full p-3 border border-gray-300 rounded text-base" />
          </div>
          <div>
            <label className="block font-medium text-[#3c3b85] mb-1">Enter Phone</label>
            <input type="tel" placeholder="Enter Phone" required className="w-full p-3 border border-gray-300 rounded text-base" />
          </div>
          <button type="submit" className="w-full py-3 bg-[#040273] text-white rounded-lg font-semibold hover:bg-[#4947d6] transition">
            CONTINUE
          </button>
        </form>
      </div>

      {/* Advisor Image Section */}
      <div className="md:w-1/3 flex flex-col justify-end items-center relative"> {/* 35% width */}
        <div className="relative left-12 transform -translate-x-1/2 translate-y-20"> {/* Adjusted position */}
           <div className="relative w-[22rem] h-[22rem] overflow-hidden rounded-full"> {/* Adjusted size */}
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-full" 
              style={{ 
                backgroundImage: 'url(https://th.bing.com/th/id/OIP.ZKbOB4BmKvIiKy-fHieivAHaHa?rs=1&pid=ImgDetMain)', 
                opacity: 0.5 
              }} 
            />
            <img 
              src="https://th.bing.com/th/id/OIP.ZKbOB4BmKvIiKy-fHieivAHaHa?rs=1&pid=ImgDetMain" 
              alt="Advisor"
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisorform;
