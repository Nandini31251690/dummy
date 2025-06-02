import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Contact info */}
      <footer className="bg-[#f8f8f8] py-10 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
          <div>
            <h2 className="text-[#7B61FF] text-2xl font-bold">Kritika enterprises</h2>
            <div className=''>
              +91 9927055680
            <br/>
            C-8 butler plaza <br/>
            Civil lines bareilly
           
            
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Products</h4>
            <ul className="space-y-1">
              <li>B2B products</li>
              <li>Laptops</li>
              <li>Medical equipments</li>
            </ul>
          </div>
          <div className="w-full md:w-96 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6289.0364960883335!2d79.41779768907527!3d28.349743886954816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0014c01f5f6df%3A0x41ff26c72c5735f4!2sASUS%20Premium%20Retailer%20-%20Kritika%20Enterprises!5e0!3m2!1sen!2sin!4v1748867630371!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kritika Enterprises Map"
            ></iframe>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 KE. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Contact
