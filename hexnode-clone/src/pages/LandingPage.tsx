
const LandingPage = () => {
    return (

        <>
            <section className="py-5">
                <div className="container-fluid bg-dark text-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h5>Unified Endpoint Management</h5>
                                <h1>Gain control and visibility over your endpoints</h1>
                                <p>
                                    Hexnode's UEM solution allows you to simplify endpoint
                                    management and free up IT. Focus on the big picture while
                                    Hexnode works on the details.
                                </p>
                                <div className="d-flex">
                                    <input
                                        type="email"
                                        className="form-control me-2"
                                        placeholder="Email"
                                        style={{ maxWidth: "250px" }} />
                                    <button className="btn btn-danger">LET'S TRY IT OUT!</button>
                                </div>
                            </div>

                            <div className="col-md-6 position-relative">
                                <img
                                    src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fbanner.jpg&w=640&q=90"
                                    alt="User working"
                                    className="img-fluid rounded" />

                                <span className="badge bg-warning position-absolute" style={{ top: "10%", left: "20%" }}>
                                    Password policy applied
                                </span>
                                <span className="badge bg-primary position-absolute" style={{ top: "40%", left: "90%" }}>
                                    TvOS Kiosk Active
                                </span>
                                <span className="badge bg-success position-absolute" style={{ top: "70%", left: "60%" }}>
                                    Device Enrolled
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="container-fluid text-center ps-3 pe-3 pt-3 " style={{backgroundColor:"#171A26"}}>
                    <div className="row d-flex  justify-content-around">
                        
                        <div className="col-md-2 text-white text-start">
                            <h6 className="fw-bold"> IDC</h6>
                            <p>Hexnode is listed as a leader and major player in IDC MarketScape 2024.</p>
                        </div>
                        <div className="col-md-2 text-white text-start">
                            <h6 className="fw-bold"> Gartner</h6>
                            <p>Hexnode was recognized in the 2023 Gartner Market Guide for UEM.</p>
                        </div>
                        <div className="col-md-2 text-white text-start">
                            <h6 className="fw-bold"> Forrester</h6>
                            <p>Forrester includes Hexnode as a Notable vendor in UEM Landscape 2023.</p>
                        </div>
                    </div>
                </div>
            </section></>
    );
};

export default LandingPage;
