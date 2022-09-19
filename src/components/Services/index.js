import {Ri24HoursFill} from 'react-icons/ri'
import './index.css'

const Services = () => (
  <div className="services-container">
    <h1 className="ser-heading">Services</h1>
    <p className="ser-description">
      Lorem Ipsum is simply dummy text of the parinting and typesettig industry.
      Lorem Ipsum has been the industry`s standard dummy te ever since the
      1500s.
    </p>
    <div className="services-list">
      <div className="services">
        <div className="each-service">
          <Ri24HoursFill className="logo" />
          <p className="services-name">
            Websites <br /> Development
          </p>
        </div>
        <div className="each-service">
          <Ri24HoursFill className="logo" />
          <p className="services-name">
            Digital <br /> Marketing
          </p>
        </div>
        <div className="each-service">
          <Ri24HoursFill className="logo" />
          <p className="services-name">
            Application <br /> Development
          </p>
        </div>
      </div>
      <div className="services">
        <div className="each-service">
          <Ri24HoursFill className="logo" />
          <p className="services-name">
            Websites <br /> Development
          </p>
        </div>
        <div className="each-service">
          <Ri24HoursFill className="logo" />
          <p className="services-name">
            Digital <br /> Development
          </p>
        </div>
        <div className="each-service">
          <Ri24HoursFill className="logo" />
          <p className="services-name">
            Application <br /> Development
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Services
