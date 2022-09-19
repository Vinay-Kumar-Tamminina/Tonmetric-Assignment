import './index.css'

const Portfolio = () => (
  <div className="portfolio-container">
    <h1 className="por-heading">Portfolio</h1>
    <p className="por-description">
      Lorem Ipsum is simply dummy text of the parinting and typesettig industry.
      Lorem Ipsum has been the industry`s standard dummy te ever since the
      1500s.
    </p>
    <div className="images-container">
      <div className="first-set">
        <img
          className="image-port"
          src="https://img.freepik.com/premium-photo/cosmetic-products-water-splash-realistic-3d-illustration-packaging-mockup-design-natural-moisturizing-cosmetics-cleansing-toner-skincare-gel-blue-bottles-tube-falling-water-surface_645257-230.jpg?w=2000"
          alt="facewash"
        />
        <img
          className="image-port"
          src="https://www.mimmynvovo.com/wp-content/uploads/2022/02/sunglasses-1170x800.jpg"
          alt="specs"
        />
        <img
          className="image-port"
          src="https://res.cloudinary.com/dsapqoyse/image/upload/v1663479319/125Background_Podium_generated_dabb3b.jpg"
          alt="3d"
        />
      </div>
      <div className="second-set">
        <img
          className="image-port1"
          src="https://res.cloudinary.com/dsapqoyse/image/upload/v1663479624/60f071d7ab6cdb7011e82390_ai-product-photography-12_qhjpup.jpg"
          alt="paste"
        />
        <img
          className="image-port"
          src="https://img.freepik.com/premium-photo/cosmetic-spa-medical-skin-care-glass-serum-bottle-micellar-tonic-with-collagen-blue-water-with-waves-advertising-medical-serum-anti-aging-care-moisturizing-cleansing_296062-517.jpg?w=1800"
          alt="paste"
        />
      </div>
    </div>
  </div>
)

export default Portfolio
