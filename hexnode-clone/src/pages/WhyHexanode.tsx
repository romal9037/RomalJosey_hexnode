import "bootstrap/dist/css/bootstrap.min.css";
import { FaShieldAlt, FaCogs, FaUsers, FaNetworkWired } from "react-icons/fa";

const WhyHexanode = () => {
  return (
    <section className="container text-center py-5 position-relative " id="Why">
      <h2 className="fw-bold mb-4">Why Hexnode?</h2>
      <div className="connector-line top-left"></div>
  <div className="connector-line top-right"></div>
  <div className="connector-line bottom-left"></div>
  <div className="connector-line bottom-right"></div>
      <div className="row align-items-center justify-content-center">
       
        <div className="col-md-5 d-flex flex-column align-items-end">
          <div className="card p-3 mb-4 shadow-sm text-start card-hover">
            <h5 className="fw-bold">

              <FaNetworkWired  size={24} color="blue" />
              &nbsp; Adapt to the new normal
            </h5>
            <p className="text-muted">
              Hybrid, remote, or onsite, you can trust Hexnode UEM to deliver.
              Create policies that cater to your organization's protocols.
              Whether it be BYOD, COPE, or platform-limited, Hexnode can manage it all.
            </p>
            <div className="card-content">
                Try Hexnode on your endpoints
              </div>
          </div>

          <div className="card p-3 shadow-sm text-start card-hover">
            <h5 className="fw-bold">
              <FaCogs size={24} color="blue" />
             &nbsp; Get more done with automation
            </h5>
            <p className="text-muted">
              Hexnode UEM automation features help free up IT's time spent on
              mundane and repetitive tasks. Do hours' worth of work in a few minutes.
            </p>
            <div className="card-content">
                Try Hexnode on your endpoints
            </div>
          </div>
        </div>

       
        <div className="col-md-2 d-flex justify-content-center my-4">
          <div className="rounded-circle bg-dark d-flex justify-content-center align-items-center" style={{ width: "80px", height: "80px" }}>
            <img src="https://static.hexnode.com/v2/assets/img/ads-pages/hexnode-app-icon.svg" alt="Hexnode" style={{ width: "50%" }} />
          </div>
        </div>

       
        <div className="col-md-5 d-flex flex-column align-items-start">
          <div className="card p-3 mb-4 shadow-sm text-start card-hover">
            <h5 className="fw-bold">
              <FaShieldAlt size={24} color="blue" />
              &nbsp; Zero compromise security
            </h5>
            <p className="text-muted">
              Enable full-fledged device encryption, data loss prevention, and
              all-rounded device security with Hexnode UEM. Be at the bleeding
              edge of security without any compromises.
            </p>
            <div className="card-content">
                Try Hexnode on your endpoints
            </div>
          </div>

          <div className="card p-3 shadow-sm text-start card-hover">
            <h5 className="fw-bold">
              <FaUsers size={24} color="blue" />
              &nbsp;Unified Policy Management
            </h5>
            <p className="text-muted">
              Create a single policy through Hexnode and apply it to all
              devices in your organization. Any platform or form factor, achieve
              a single pane of glass management with Hexnode.
            </p>
            <div className="card-content">
                Try Hexnode on your endpoints
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHexanode;
