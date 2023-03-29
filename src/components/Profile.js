import React, { useState, useEffect } from 'react';

function ProfileCard() { //childrenadopted , orphanagename 
  const [profile, setProfile] = useState({
    image: '',
    name: '',
    address:' ',
    email: '',
    phone: '',
    maritalstatus: '' ,
    childrenadopted: '',
    orphanagename: '',
  });

  useEffect(() => {
    fetch('https://api.example.com/profile')
      .then((response) => response.json())
      .then((data) => {
        setProfile({
          image: data.image,
          name: data.name,
          address: data.address,
          email: data.email,
          phone: data.phone,
          maritalstatus: data.maritalstatus,
          childrenadopted: data.childrenadopted,
          orphanagename: data.orphanagename,
          
        });
      })
      .catch((error) => {
        console.log(error);
        setProfile({
          image:
            'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
          name: 'Aniket Gupta',
          address: 'Kandivali',
          email: 'info@example.com',
          phone: '123 456 789',
          maritalstatus: 'Single',
          childrenadopted: '1',
          orphanagename: 'Sindhutai Sakpal Orphanage',
         
        });
      });
  }, []);

  return (
    <section className="vh-900" style={{ backgroundColor: '#34495e' , display: 'flex' ,justifyContent:'center',alignContent:'center',padding:'70px 0' }}>
      <div className="container py-5 h-450">
        <div className="row d-flex justify-content-center align-items-center h-450">
          <div className="col col-lg-8 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' , margin: '0 auto',width:'90%' }}>
              <div className="row g-0">
                <div
                  className="col-md-4 gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: '.5rem',
                    borderBottomLeftRadius: '.5rem',
                  }}
                >
                  <img
                    src={profile.image}
                    alt="Avatar"
                    className="img-fluid my-5"
                    style={{ width: '80px' }}
                  />
                  <h5>{profile.name}</h5>
                  <p><b>{profile.address}</b></p>
                  
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{profile.email}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">{profile.phone}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Marital Status</h6>
                        <p className="text-muted">{profile.maritalstatus}</p>
                      </div>
                    </div>
                    <h6></h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Children Adopted</h6>
                        <p className="text-muted">{profile.childrenadopted}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Orphanage name</h6>
  <p className="text-muted">{profile.orphanagename}</p>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
  ) ;
}
export default ProfileCard;