import React from 'react';
import { CardFooter } from 'reactstrap';

const styles = {
  body: {
    background: 'linear-gradient(90deg, #145889 0%, #AB47BC 100%)'
  },
  container: {
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, .2)',
    marginBottom: '50px'

  },
  title: {
    fontSize: '25px',
    fontWeight: '100'
  },
  icon: {
    position: 'relative',
    bottom: '11px'
  },
  mt100: {
    marginTop: '100px'
  },
  profileImg: {
    width: '68px',
    height: '68px',
    borderRadius: '50%'
  },
  card: {
    borderRadius: '15px',
    marginLeft: '30px',
    marginRight: '30px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, .2)'
  },
  cardBody: {
    position: 'relative',
    bottom: '35px'
  },
  btn: {
    marginTop: '36px',
    marginBottom: '45px',
    backgroundColor: '#AB47BC',
    border: 'none',
    color: '#fff'
  },
  btnHover: {
    WebkitTransform: 'scale(1.05)',
    msTransform: 'scale(1.05)',
    transform: 'scale(1.05)',
    color: '#fff'
  },
  header: {
    paddingTop: '40px'
  }

};

function ExpertTeam() {
    return (
      <div className="container mx-auto mt-3 col-md-10 mt-100" style={styles.container}>
        <div className="header" style={styles.header}>
          <div className="title" style={styles.title}>Our Expert Team</div>
          <p><small className="text-muted"><b>Orphanage Management System </b></small></p>
        </div>
        <div className="row justify-content-center pb-5">
          <div className="card col-md-3 mt-100" style={styles.card}>
            <div className="card-content">
              <div className="card-body p-0" style={styles.cardBody}>
                <div className="profile">
                  <img src="https://media.istockphoto.com/id/878841374/vector/beautiful-teacher-female-head-avatar-character.jpg?s=1024x1024&w=is&k=20&c=yGJQnxi6Xw-Kg_GPNAzAsqQ-XMyRC_G2SilartZdbvA=" style={styles.profileImg}
                  data-mdb-toggle="animation" data-mdb-animation-start="onLoad" data-mdb-animation="fade-in-down"
                  data-mdb-animation-duration="1000" data-mdb-animation-delay="200" />
                </div>
                
                <div className="card-title mt-4" style={{textAlign: 'center'}}>
                  Mrs.Aabha Patil <br/>
                  <small>Assistant Professor</small>
                </div>
                <div className="card-subtitle">
                  <p><small className="text-muted">I expected anything less than perfect for the team of experts. They are the best team ever!</small></p>
                </div>
                <button type="button" className="btn btn-outline-success" >View</button>
              </div>
            </div>
          </div>
          <div className="card col-md-3 mt-100" style={styles.card}>
            <div className="card-content">
              <div className="card-body p-0" style={styles.cardBody}>
                <div className="profile">
                  <img src="https://www.w3schools.com/w3images/avatar2.png" style={styles.profileImg} />
                </div>
                <div className="card-title mt-4" style={{textAlign: 'center'}}>
                  Aniket Gupta <br />
                  <small>Group Leader</small>
                </div>
                <div className="card-subtitle">
                  <p><small className="text-muted">I have been working with this team for over 2 years now and I must say they are the best in the best     </small></p>
                </div>
                <button type="button" className="btn btn-outline-success" >View</button>
              </div>
            </div>
          </div>
          <div className="card col-md-3 mt-100" style={styles.card}>
            <div className="card-content">
              <div className="card-body p-0" style={styles.cardBody}>
                <div className="profile">
                  <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg" style={styles.profileImg} />
                </div>
                <div className="card-title mt-4" style={{textAlign: 'center'}}>
                  Nilesh Gupta <br />
<small>Group Member </small>
</div>
<div className="card-subtitle">
<p><small className="text-muted">Working with this team has been an incredible experience. They are not only talented but also dedicated and passionate about their work!</small></p>
</div>
<button type="button" className="btn btn-outline-success" >View</button>
</div>
</div>
</div>
<div className="card col-md-3 mt-100" style={styles.card}>
            <div className="card-content">
              <div className="card-body p-0" style={styles.cardBody}>
                <div className="profile">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HM2SXYoFDGDMERjCJ3iRwYKfYGJdlMrVog8Zpufs-Am_9GY6Tm8bXFUkbEwS7xzWEhU&usqp=CAU" style={styles.profileImg} />
                </div>
                <div className="card-title mt-4" style={{textAlign: 'center'}}>
                  Atharva Ahirekar <br />
<small>Group Member</small>
</div>
<div className="card-subtitle">
<p><small className="text-muted">Working with this team has been an incredible experience. They are not only talented but also dedicated and passionate about their work!</small></p>
</div>
<button type="button" className="btn btn-outline-success" >View</button>
</div>
</div>
</div>
<div className="card col-md-3 mt-100" style={styles.card}>
            <div className="card-content">
              <div className="card-body p-0" style={styles.cardBody}>
                <div className="profile">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOqh8olBwvgjkqVFWXt_v1QPvAtX7xG7wDg&usqp=CAU" style={styles.profileImg} />
                </div>
                <div className="card-title mt-4" style={{textAlign: 'center'}}>
                  Om Garg<br />
<small>Group Member</small>
</div>
<div className="card-subtitle">
<p><small className="text-muted">Working with this team has been an incredible experience. They are not only talented but also dedicated and passionate about their work!</small></p>
</div>
<button type="button" className="btn btn-outline-success" >View</button>    
</div>
</div>
</div>
</div>
</div>
)
}

export default ExpertTeam;





  


