import { useState } from "react";

type PlatformKey = "Android" | "iOS" | "macOS" | "Windows" | "tvOS" | "FireOS";

const platforms: Record<PlatformKey, { img: string; description: string }> = {
  Android: {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fandroid.jpg&w=640&q=90",
    description:
      "Remotely deploy, manage, monitor, and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
  },
  iOS: {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FiOS.jpg&w=640&q=90",
    description:
      "Manage iPhones and iPads seamlessly with Hexnode's iOS device management solutions.",
  },
  macOS: {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FmacOS.jpg&w=640&q=90",
    description:
      "Secure and configure Mac devices while ensuring compliance with enterprise policies.",
  },
  Windows: {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fwindows.jpg&w=640&q=90",
    description:
      "Deploy Windows policies, enforce security settings, and ensure smooth enterprise operations.",
  },
  tvOS: {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FtvOS.jpg&w=640&q=90",
    description:
      "Manage Apple TVs with Hexnode's comprehensive tvOS management solutions.",
  },
  FireOS: {
    img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FfireOS.jpg&w=640&q=90",
    description:
      "Control and secure Amazon FireOS devices with powerful Hexnode policies.",
  },
};

const Platforms = () => {
  const [activePlatform, setActivePlatform] = useState<PlatformKey>("Android");

  return (
    <section className="container py-5" id="platforms">
      <h2 className="text-center fw-bold">Multi-platform Endpoint Management</h2>
      <p className="text-center text-muted">
        Devices of varying platforms? Hexnode thrives in a diverse environment.
      </p>

      <div className="row align-items-start">
        <div className="col-md-5 text-center">
          <img
            src={platforms[activePlatform].img}
            alt={activePlatform}
            className="img-fluid rounded"
            style={{ maxHeight: "350px" }}
          />
        </div>

        <div className="col-md-7">
          <div className="list-group">
            {(Object.keys(platforms) as PlatformKey[]).map((platform) => (
              <div key={platform} className="w-100">
                {activePlatform === platform ? (
                  <div className="p-3 border rounded bg-light">
                    <h5>{platform}</h5>
                    <p>{platforms[platform].description}</p>
                    <a href="#" className="text-danger">
                      Try Hexnode on your endpoints
                    </a>
                  </div>
                ) : (
                  <button
                    className="list-group-item list-group-item-action"
                    onClick={() => setActivePlatform(platform)}
                  >
                    {platform}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
