import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Clients = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="clients-container">
      <h1 className="cli-heading"> Clients</h1>
      <p className="cli-description">
        Lorem Ipsum is simply dummy text of the parinting and typesettig
        industry. Lorem Ipsum has been the industry`s standard dummy te ever
        since the 1500s.
      </p>
      <div className="slider-container">
        <Slider
          {...settings}
          slidesToShow={3}
          slidesToScroll={3}
          autoplaySpeed={3000}
        >
          <div className="logo-container">
            <img
              className="thumbnail"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/800px-Infosys_logo.svg.png?20100302211036"
              alt="logo"
            />
          </div>
          <div>
            <img
              className="thumbnail"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1024px-Accenture.svg.png?20201204190130"
              alt="logo"
            />
          </div>
          <div>
            <img
              className="thumbnail"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png?20210729021037"
              alt="logo"
            />
          </div>
          <div>
            <img
              className="thumbnail"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1598px-Dell_Logo.png?20160918115731"
              alt="logo"
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Clients
