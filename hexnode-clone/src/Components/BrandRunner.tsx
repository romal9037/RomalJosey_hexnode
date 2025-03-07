

const brandLogos = [
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
  "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Flogos%2Fdark-logo%2Fgroup1-automotive.png&w=1920&q=75",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
];

export default function BrandRunner() {
  return (
    <section className="container my-5" id="contact">
    <div className="brand-runner">
      <div className="brand-track">
        {brandLogos.concat(brandLogos).map((logo, index) => (
          <img key={index} src={logo} alt="Brand" className="brand-logo" />
        ))}
      </div>
    </div>
    </section>
  );
}
