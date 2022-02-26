import React from 'react'

export default function Silder() {
  return (
    <section className="slider_section ">
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container ">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <h5>
                    Bostorek Bookstore
                  </h5>
                  <h1>
                    For All Your <br />
                    Reading Needs
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="https://www.fahasa.com/media/magentothem/banner7/VIB_Thang3_920_x_420.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <h5>
                    Bostorek Bookstore
                  </h5>
                  <h1>
                    For All Your <br />
                    Reading Needs
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="https://cdn0.fahasa.com/media/magentothem/banner7/z3168684495519_c1eb2e1b865944d7f66e43bffaad650f.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <h5>
                    Bostorek Bookstore
                  </h5>
                  <h1>
                    For All Your <br />
                    Reading Needs
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="https://cdn0.fahasa.com/media/magentothem/banner7/920x420_ShoppePay-T2_Bo1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel_btn_box">
        <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  )
}
