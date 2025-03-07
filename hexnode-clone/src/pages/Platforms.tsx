import { useState } from "react";


type PlatformKey = "Android" | "iOS" | "macOS" | "Windows" | "tvOS" | "FireOS";

const platforms: Record<PlatformKey, { img: string; description: string }> = {
  Android: {
    img: "/images/android.png",
    description:
      "Remotely deploy, manage, monitor, and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
  },
  iOS: {
    img: "/images/ios.png",
    description:
      "Manage iPhones and iPads seamlessly with Hexnode's iOS device management solutions.",
  },
  macOS: {
    img: "/images/macos.png",
    description:
      "Secure and configure Mac devices while ensuring compliance with enterprise policies.",
  },
  Windows: {
    img: "/images/windows.png",
    description:
      "Deploy Windows policies, enforce security settings, and ensure smooth enterprise operations.",
  },
  tvOS: {
    img: "/images/tvos.png",
    description:
      "Manage Apple TVs with Hexnode's comprehensive tvOS management solutions.",
  },
  FireOS: {
    img: "/images/fireos.png",
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

      <div className="row align-items-center">
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
              <button
                key={platform}
                className={`list-group-item list-group-item-action ${
                  activePlatform === platform ? "active" : ""
                }`}
                onClick={() => setActivePlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>

          <div className="mt-3 p-3 border rounded bg-light">
            <h5>{activePlatform}</h5>
            <p>{platforms[activePlatform].description}</p>
            <a href="#" className="text-danger">
              Try Hexnode on your endpoints
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
