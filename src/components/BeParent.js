import React from 'react';

export default function BeParent(props) {
  return (
    <div className=" mx-auto py-9 px-4 w-screen">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://media.istockphoto.com/id/1130184734/photo/portrait-of-farm-children.jpg?s=612x612&w=0&k=20&c=yDKGL6_cHnJjf3YLCeEyxoDihmd7xK-wbcFMpdrEPtk=" className="d-block w-100" alt="..." style={{height: "75vh", objectFit: "cover"}}/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/1225623705/photo/group-of-happy-african-children-orphanage-in-nairobi-kenya-east-africa.jpg?b=1&s=170667a&w=0&k=20&c=TRfk7CVGirA8pM2sMwA4m3wLq9-o7DKcOPUA-rZGFNE=" className="d-block w-100" alt="..." style={{height: "75vh", objectFit: "cover"}}/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://serudsindia.org/wp-content/uploads/2022/02/orphanage-Group-photo-1200-1024x598.jpg" className="d-block w-100" alt="..." style={{height: "75vh", objectFit: "cover"}}/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden"></span>
</button>
</div>
</div>
<div className="md:w-1/2 md:pl-8">
<h2 className="text-3xl font-semibold mb-2">{props.title}</h2>
<p className="text-gray-600">{props.description}</p>
</div>
<div>
<div className="text-center mt-4">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Creating Tommarows Future with Precious Hands</h1>
            <p className="mb-8_leading-relaxed">On the day you were adopted you were placed in our lives and born into our hearts in a very special way. We prayed for you, we dreamed of you, we prepared for you, we waited for you. And when we finally held you for the very first time it felt like you’d belonged to us forever.<b>Whether your children are yours through biology or adoption, they are yours through love.
            </b> We loves you till moon and black </p>
          </div>
</div>
</div>
</div>
);
}






