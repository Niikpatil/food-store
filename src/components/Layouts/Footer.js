import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
  };

  return (
    <div className="container-l shadow p-2  bg-secondary" style={footerStyle}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-6 border-bottom">
        <div className="col-md-4 d-flex align-items-center">
          <p className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
            OpenBlog
          </p>
          {/* <span className=" b-5 text-light">code by NiK</span> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
