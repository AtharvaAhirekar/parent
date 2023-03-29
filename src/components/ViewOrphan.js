import React, { useEffect , useState} from 'react';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter,
  MDBCardHeader,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

function ProfilePage() {
  const[data , setData] = useState({
    image:'',
    name:'',
    nameaddress:'',
    organizationName:'',
    email:'',
    phone:'',
    mobile:'',
    address:'',
    adharimage:'',
    birthimage:'',
    domacileimage:'',
    adoptionimage:'',
  });

  useEffect(() =>{
    fetch('')
    .then((response)=>response.json())
    .then((data) =>{
      setData({
        image:data.image,
        name: data.name,
        nameaddress: data.nameaddress,
        organizationName: data.organizationName,
        email: data.email,
        phone: data.phone,
        mobile:data.mobile,
        address: data.address ,
        adharimage: data.adharimage,
        birthimage:data.birthimage,
        domacileimage:data.domacileimage,
        adoptionimage:data.adoptionimage,
      });
    })
    .catch((error)=>{
      console.log(error);
      setData({
        image:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
        name:" Saurabh Dubey ",
        nameaddress: "Mumbai Kandivali west-400067",
        organizationName: "Sindhutai Sakpal Orphanage",
        email:"sindhutai12@gmail.com",
        phone:"(097) 234-5678",
        mobile:"(098) 765-4321",
        address:"Kankiya Park , Mira Road East-400052",
        adharimage:"https://i.pinimg.com/474x/ac/3b/19/ac3b195812909b9747bc43a95360a20c.jpg",
        birthimage:"https://pdffile.co.in/wp-content/uploads/pdf-thumbnails/2022/03/small/bihar-birth-certificate-format--842.jpg",
        domacileimage:"https://leverageedu.com/blog/wp-content/uploads/2021/02/Domicile-Certificate-791x1024.jpg",
        adoptionimage:"https://printabletemplates.com/wp-content/uploads/2017/12/adoption-certificate-04-580x751.jpg",
      });
    });
  },[]);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-2">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' , height:'150px'}}
                  fluid />
                <p className="text-muted mb-1">{data.name}</p>
                <p className="text-muted mb-4">{data.nameaddress}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn outline className="ms-1"> {data.organizationName}</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0" style={{ height:'340px'}}>
                <h4 className="text-center"> Know Us More </h4>
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://Orphanage.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>https://Newsletter.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>https://Article.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>https://Events.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>https://Ourexperience.com</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-15" style ={{width:"50vw"}}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Organization Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.organizationName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.mobile}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

          <MDBRow >
          <MDBCol md="6">
          <MDBCard className="mb-4 mb-md-0" style = {{width:"770px" }}>
            <MDBCardBody>
              <MDBCardHeader style={{textAlign:'center'}}><h4>This is Header </h4> </MDBCardHeader>

              <table style={{width:"729px" , textAlign:'center'}}>
                <thead style={{border:'1px solid black'}}>
                  <tr style={{height:"50px"}}>
                    <th>Number</th>
                    <th>Document Name</th>
                    <th>View Document</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{border:'1px solid black' , height:"50px"}}>
                    <td style={{border:'1px solid black'}}>[1]</td>
                    <td style={{border:'1px solid black'}}> Birth Certificate </td>
                    <td style={{border:'1px solid black'}}><button type="button" class="btn btn-outline-success" onClick={()=>window.open(data.birthimage,'_blank' ,"width=500,height=500,top=100,left=100,toolbar=yes,status=yes")}/*data-bs-toggle="modal" data-bs-target="#exampleModal"*/>View</button></td>
                  </tr>
                  <tr style={{border:'1px solid black', height:"50px"}}>
                    <td style={{border:'1px solid black'}}>[2]</td>
                    <td style={{border:'1px solid black'}}> Adhar Card </td>
                    <td style={{border:'1px solid black'}}><a href="#"><button type="button" class="btn btn-outline-success" onClick={()=>window.open(data.adharimage,'_blank',"width=500,height=500,top=100,left=100,toolbar=yes,status=yes")}/*data-bs-toggle="modal" data-bs-target="#exampleModal"*/>View</button></a></td>
                  </tr>
                  <tr style={{border:'1px solid black',height:"50px"}}>
                    <td style={{border:'1px solid black'}}>[3]</td>
                    <td style={{border:'1px solid black'}}> Domacile</td>
                    <td style={{border:'1px solid black'}}><a href="#"><button type="button" class="btn btn-outline-success" onClick={()=>window.open(data.domacileimage,'_blank',"width=500,height=500,top=100,left=100,toolbar=yes,status=yes")}/*data-bs-toggle="modal" data-bs-target="#exampleModal"*/>View</button></a></td>
                  </tr>
                  <tr style={{border:'1px solid black',height:"50px"}}>
                    <td style={{border:'1px solid black'}}>[4]</td>
                    <td style={{border:'1px solid black'}}> Adoption Document</td>
                    <td style={{border:'1px solid black'}}><a href="#"><button type="button" class="btn btn-outline-success" onClick={()=>window.open(data.adoptionimage,'_blank',"width=500,height=500,top=100,left=100,toolbar=yes,status=yes")}/*data-bs-toggle="modal" data-bs-target="#exampleModal"*/>View</button></a></td>
                  </tr>
                </tbody>
                
              </table>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>



            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default ProfilePage;

{/* <MDBCol md="6">
            <MDBCard className="mb-4 mb-md-0" >
            <MDBCardBody>
              <MDBCardText className="mb-4">Educational Details</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Primary Education</MDBCardText>
                       <input type="text" className="form-control" id="phoneNumber" placeholder="Primary Education" style={{ borderRadius: '5px', border: '1px solid #ddd' }}/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Secondary Education </MDBCardText>
                      <input type="text" className="form-control" id="phoneNumber" placeholder=" Secondary Education" style={{ borderRadius: '5px', border: '1px solid #ddd' }}/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}> Graduation </MDBCardText>
                      <input type="text" className="form-control" id="phoneNumber" placeholder="Graduation" style={{ borderRadius: '5px', border: '1px solid #ddd' }}/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Post Graduation </MDBCardText>
                      <input type="text" className="form-control" id="phoneNumber" placeholder="Post-Graduation" style={{ borderRadius: '5px', border: '1px solid #ddd' }}/>
                        <div className="text-center mt-4">
                          <button type="button" className="btn btn-warning" style={{ backgroundColor: 'lightblue', color: 'black' }} onClick={() => {alert (' Educational Data updated successfully!')}}>Update</button>
                       </div>
              </MDBCardBody>
           </MDBCard>
</MDBCol> */}

{/* <MDBCol md="6">
            <MDBCard className="mb-4 mb-md-0" >
            <MDBCardBody>
              <MDBCardText className="mb-4">Medical Details</MDBCardText>
                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Disease</MDBCardText>
                <input type="text" className="form-control" id="phoneNumber" placeholder="Disease" style={{ borderRadius: '5px', border: '1px solid #ddd' }}/>

              <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}> Last Check-up Date </MDBCardText>
              <input type="date" className="form-control" id="date" placeholder="date" style={{ borderRadius: '5px', border: '1px solid #ddd' }}/>

      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}> Next Check-up Date </MDBCardText>
      <input type="date" className="form-control" id="date" placeholder="Enter your Phone Number" style={{ borderRadius: '5px', border: '1px solid #ddd' }}/>

      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Doctor Name</MDBCardText>
      <input type="text" className="form-control" id="text" placeholder="Dr." style={{ borderRadius: '5px', border: '1px solid #ddd' }}/>
      <div className="text-center mt-4">
      <button type="button" className="btn btn-warning" style={{ backgroundColor: 'lightblue', color: 'black' }} onClick={() => {alert (' Medical Data updated successfully!')}}>Update</button>

    </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol> */}