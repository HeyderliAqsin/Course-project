import React from "react";
import "./multiphoto.scss";

const MultiPhoto = () => {
  return (
    <section id="MultiPhoto">
      <div className="container">
        <div className="row">
         <div className="col-lg-10 offset-lg-1">
         <div className="top-text">
            <h5>
              Our goal is to make online education work for everyone
            </h5>
            <p>
              Sagittis congue augue egestas volutpat egestas magna suscipit
              egestas magna ipsum vitae purus efficitur ipsum primis and cubilia
              laoreet augue egestas luctus donec diam. Curabitur ac dapibus
              libero mauris donec ociis and neque. Phasellus blandit tristique
              justo ut aliquam. Aliquam vitae molestie nunc sapien justo,
              aliquet non molestie augue tempor sapien
            </p>
          </div>
          <div className="img-block">
            <img className="img-fluid" src="/images/image-03.jpg" alt="" />
          </div>
         </div>
        </div>
        <div className="boxes">
          <div className="row">
            <div className="col-lg-4">
              <div className="abox d-flex">
                <img  width={70} src="/images/tap.png" alt="" />
                <div className="abox-txt">
                  <h5>Trusted Content</h5>
                  <p>
                    Congue augue egestas magna volutpat dictum suscipit ipsum
                    egestas magna vitae purus
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="abox d-flex">
                <img  width={70} src="/images/tap.png" alt="" />
                <div className="abox-txt">
                  <h5>Certified Teachers</h5>
                  <p>
                    Congue augue egestas magna volutpat dictum suscipit ipsum
                    egestas magna vitae purus
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="abox d-flex">
                <img  width={70} src="/images/tap.png" alt="" />
                <div className="abox-txt">
                  <h5>Lifetime Access</h5>
                  <p>
                    Congue augue egestas magna volutpat dictum suscipit ipsum
                    egestas magna vitae purus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiPhoto;
