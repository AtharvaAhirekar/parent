import React from 'react'
import{ Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
import { Doughnut,Line } from 'react-chartjs-2';
import { CardTitle } from 'reactstrap';
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
);
const doughnutData = {
  labels: ['Food', 'Cloths', 'Shelter', 'Education' , 'Medical Care' , 'Staffing' , 'Other Expences'],
  datasets: [
    {
      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
      
      backgroundColor: ['rgba(63, 81, 181, 0.5)', 'rgba(77, 182, 172, 0.5)', 'rgba(66, 133, 244, 0.5)', 'rgba(156, 39, 176, 0.5)', 'rgba(233, 30, 99, 0.5)', 'rgba(66, 73, 244, 0.4)', 'rgba(66, 133, 244, 0.2)'],
      hoverBackgroundColor: ['rgba(63, 81, 181, 0.5)', 'rgba(77, 182, 172, 0.5)', 'rgba(66, 133, 244, 0.5)', 'rgba(156, 39, 176, 0.5)', 'rgba(233, 30, 99, 0.5)', 'rgba(66, 73, 244, 0.4)', 'rgba(66, 133, 244, 0.2)'],
     
    },

  ],
};


const lineData = {
  labels: ['2015', '2016','2017','2018','2019','2020','2021','2022'],
  datasets: [
    {
      label: 'Donation',
      data: [51, 45, 53, 62, 75 , 55 , 60 , 65],
      fill: false,
      borderColor: '#4bc0c0',
    },
  ],
};

export default function Donation(props){
    return(
        <div>
            <div class="row no-gutters bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://serudsindia.org/wp-content/uploads/2018/07/9.png" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="https://serudsindia.org/wp-content/uploads/2018/07/8.png" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="https://serudsindia.org/wp-content/uploads/2018/07/7.png" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="col-md-6 position-static p-4 pl-md-0">
    <h5 class="mt-0">We need you..</h5>
    <p>Donating to an orphanage is an emotional and rewarding act of kindness. By providing basic necessities and a chance for a happy childhood, your donation can make a huge impact on the lives of children who have lost their parents and are without a stable home. It's a selfless act that can inspire others to give back and make a difference, and can help these children grow up to become confident, compassionate, and successful members of society. Let's open our hearts and make a difference in the lives of those who are in need of our love and support.</p>
    <p>When you donate to an orphanage, you're not just helping the children, but also the staff who work tirelessly to care for them. Your donation can help improve the facilities, provide education and training for the staff, and ensure that the children receive the best care possible. It can also help fund programs and activities that enrich the children's lives and give them a sense of belonging and purpose.</p>
    <a href="#" class="stretched-link"></a>
  </div>
</div>
{/* <div className='card p-5,m-5'> */}
{/* <div className="mt-5 mb-5"style={{textAlign:'center'}}><b><h4>Where the money goes…</h4></b></div> */}
<div class="card" style={{width:"1490px",height:"350px"}} >
  <div class="card-header">
    <b><h4 style={{textAlign:'center'}}>Where the money goes…</h4></b>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-md-8">
        <p>We believe that transparency is extremely important and want to be clear that there are <b>absolutely zero administration fees </b> deducted by us from donations independent of banking/platform charges.

We are so fortunate to be able to pay all of our own administration fee’s, salaries and similar costs through independent funding programs such as our school, workshop, farm and, occasionally, by donations specifically given by family and friends specifically for these expenses.
</p>
<p>At our organization, we prioritize transparency and want to assure our donors that no administration fees are deducted from donations, independent of any banking or platform charges. We fund all of our administration fees, salaries, and other costs through independent funding programs and occasional donations from family and friends specifically given for these expenses. Our Audited Reports and Annual Reports provide detailed information about our financial activity, and we strive to keep our donors informed about how their donations are being used. By being transparent and accountable, we hope to build trust with our donors and have a greater impact on the causes we support.</p>
      </div>
      <div class="col-md-4" style={{position:'relative',top:'-12px',left:'80px'}}>
        <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcSLLGOwwtQ10v9nLeprZ1srRR7eYQd0p5Uc0uEm48NeqpLp9g1z" alt="Card image" class="rounded-circle img-fluid" style={{ width: "280px", height: "280px" }} />
        <p style={{position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}><h1>0%</h1></p>
      </div>
    </div>
  </div>
</div>
<div className='card' style={{width:'98%'}}>
<div class="card-header">
    <b><h4 style={{textAlign:'center'}}>Our Records..</h4></b>
  </div>
<div>
<div class="row">
  <div class="col-sm-6">
    <div class="card"style={{width:'100%'}}>
    <h5 class="card-header" style={{ textAlign:'center',border:'1px solid black'}}>Donation Inculsion</h5>
      <div class="card-body">
     
        <div style={{height:'50%' , width:'50%', position:'relative',left:'170px'}}><Doughnut data={doughnutData} /></div>
        {/*<p class="card-text">This is the first card</p>*/}
        <div class="card-footer"><h6>When donating to orphanages, it's important to ensure that your money is going towards programs that directly benefit the children, such as education, healthcare, and basic needs like food and shelter.It's important that the majority of funds go towards improving the lives of the children in care.</h6></div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{width:'96%'}}>
    <h5 class="card-header" style={{textAlign:'center',border:'1px solid black'}}>Donation Gain</h5>
      <div class="card-body">
        <div class="card-title" style={{textAlign:'center'}}><h4> </h4></div>
        <div><Line data={lineData}/></div>
        <div class = "card-footer"><h6>To ensure that your donation has the greatest impact, consider supporting organizations that prioritize community-based care over institutional care. This approach focuses on providing support to families and communities to prevent children from being orphaned in the first place.</h6></div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

{/* <div class = "card" style={{width: '98%', height:'100%'}}>
  <div>
  <div class="card" style={{ display: 'flex', alignItems: 'center',width: '98%', height: '100%' }}>
  <div class="card-header" style={{ textAlign: 'center' }}>
    <h1 style={{ color: '#f5564e' }}>Donate to Support Orphans</h1>
  </div>
  <div class="row">
    <div class ="col-md-6">
  <div>
    <form style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', width: '1000px' }}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Your Full Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Phone Number</label>
        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your Phone Number" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Email Address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Donation Amount ($)</label>
        <input type="number" className="form-control" id="Amount" placeholder="Enter Amount" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
      <div className="mb-3">
        <label htmlFor="panAadhar" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>PAN/Aadhar Number (for tax exemption)</label>
        <input type="text" className="form-control" id="panAadhar" placeholder="Enter Number" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
            <div className="mb-3">
        <label htmlFor="monthlyDonation" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Make it a Monthly Donation</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="monthlyDonation" />
          <label className="form-check-label" htmlFor="monthlyDonation">
            Yes, I want to make this a monthly donation
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" style={{ borderRadius: '5px', backgroundColor: '#f5564e', border: 'none' }}>Donate Now</button>
      <h4 style={{ textAlign: 'center', fontSize: '24px', color: '#444', marginTop: '20px' }}>Thank you for your kind donation!</h4>
<p style={{ textAlign: 'center', fontSize: '18px', color: '#666', marginTop: '10px' }}>Your donation will help us provide food, shelter, and education to orphaned children.</p>
</form>

  </div>
  </div>
  < div class = "col-md-6">
    
  </div>
  </div> 
</div>

  </div>
</div> */}

<div class="card" style={{width:'98%',height:'80%%'}}>
  <div class = "card-header" style={{textAlign:'center'}}><h4> Donate Us...</h4></div>
  <div class="row no-gutters">
    <div class="col-md-6">
      <div class="card-body">
        
        {/*<div class = "card" style={{width:'100%'}}>*/}
        
        <form style={{ width:'100%',height:'80%',backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'}}>
        <div className="mb-3">
        <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Your Full Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Phone Number</label>
        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your Phone Number" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Email Address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Donation Amount (ETH)</label>
        <input type="number" className="form-control" id="Amount" placeholder="Enter Amount" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
      <div className="mb-3">
        <label htmlFor="panAadhar" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>PAN/Aadhar Number (for tax exemption)</label>
        <input type="text" className="form-control" id="panAadhar" placeholder="Enter Number" style={{ borderRadius: '5px', border: '1px solid #ddd' }} />
      </div>
            <div className="mb-3">
        <label htmlFor="monthlyDonation" className="form-label" style={{ fontWeight: 'bold', color: '#444' }}>Make it a Monthly Donation</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="monthlyDonation" />
          <label className="form-check-label" htmlFor="monthlyDonation">
            Yes, I want to make this a monthly donation
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" style={{ borderRadius: '5px', backgroundColor: '#f5564e', border: 'none' }}>Donate Now</button>
      <h4 style={{ textAlign: 'center', fontSize: '24px', color: '#444', marginTop: '20px' }}>Thank you for your kind donation!</h4>
<p style={{ textAlign: 'center', fontSize: '18px', color: '#666', marginTop: '10px' }}>Your donation will help us provide food, shelter, and education to orphaned children.</p>

</form>
        {/*</div>*/}
      </div>
    </div>
    
    <div class="col-md-6" >
      <div class=" card" style={{height:'95%', width:'90%'}}>
  <div style={{padding:'20px'}}>
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://thumbs.dreamstime.com/z/orphanage-donation-flat-vector-illustration-volunteers-community-isolated-cartoon-characters-purple-background-young-people-179500613.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/orphan-boy-volunteer-take-toys-donation-box-humanitarian-aid-to-poor-kids-volunteering-philantropy-orphan-boy-250825422.jpg" class="d-block w-100" style={{}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-vector/volunteer-group-donates-old-books-newspapers-poor-students_701961-1285.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <div style={{padding:'30px'}} > We want to express our heartfelt gratitude for your generous donation to our orphanage. Your support will help us provide essential resources and services to vulnerable children who are in need of care and support. Your contribution will make a significant difference in their lives and enable us to provide them with a safe and nurturing environment where they can receive the care and attention they deserve. Your kindness and compassion are greatly appreciated, and we are honored to have you as a partner in our efforts to improve the lives of these children. Thank you for making a positive impact on our community and helping us to create a brighter future for these young individuals.</div>
  
</div>
<h5></h5>
</div>

    </div>
  </div>
</div>

</div>
       
    );
}
//https://serudsindia.org/wp-content/uploads/2018/07/9.png
//https://serudsindia.org/wp-content/uploads/2018/07/8.png
//https://serudsindia.org/wp-content/uploads/2018/07/7.png