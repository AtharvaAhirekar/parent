import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ backgroundColor: '#fff', margin: '0 auto', maxWidth: '1500px' }}>
      <img
        src="https://media.istockphoto.com/id/882346278/photo/young-child-indicating-his-love-for-his-home.jpg?s=612x612&w=0&k=20&c=Y2e4aDfEO5aO4_RoEZrtw9Hm_KA7odvc2K2fHrd96DQ="
        alt="child indicating love for his home"
        style={{ width: '100%' , height:'650px', objectFit: 'cover' }}
      />
      <div style={{ padding: '50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontWeight: 'bold', fontSize: '36px', color: '#444' }}>Contact Us</h2>
        <div className="row">
          <div className="col-lg-6">
            <form style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your Phone Number" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Enter Subject" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" style={{ borderRadius: '5px', border: '1px solid #ddd' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ borderRadius: '5px', backgroundColor: '#f5564e', border: 'none' }}>Submit</button>
              <h4 style={{ textAlign: 'center', fontSize: '24px', color: '#444' }}>We will reach back to you soon...</h4>

            </form>
          </div>
          <div className="col-lg-6" style={{ marginTop: '30px' }}>
            <div style={{ position: 'relative', height: '100%', paddingBottom: '100%', top: '-20px', borderRadius: '10px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
              <iframe
                src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5893586058687!2d72.87404391490466!3d19.300215886959695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b01633d596dd%3A0x5846eeeb84dd563f!2sShree%20L%20R%20Tiwari%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1679171905664!5m2!1sen!2sin" 
                title="Map"
style={{ border: 'none', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius: '10px' }}
></iframe>
</div>
</div>
</div>
</div>
</div>
);
};

export default ContactUs;
