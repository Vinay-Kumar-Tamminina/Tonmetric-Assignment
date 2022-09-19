import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoMdClose, IoIosArrowForward} from 'react-icons/io'
import Axios from 'axios'

import 'reactjs-popup/dist/index.css'

import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle, AiOutlineMail} from 'react-icons/ai'
import {FaInstagramSquare, FaSnapchat, FaPhoneAlt} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'
import {VscGlobe} from 'react-icons/vsc'

import './index.css'

class ProfileSection extends Component {
  componentDidMount() {
    Axios.get('http://localhost:3008/employee/3').then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <div className="profile-container">
        <div className="banner-container">
          <img
            className="company-image"
            src="https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663507340/image001_1_ifcgtt.png"
            alt="company name"
          />
        </div>
        <div className="profile-details-section">
          <div className="profile">
            <img
              className="image"
              src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg"
              alt="pic"
            />
          </div>
          <div className="profile-info">
            <h1 className="name">Akhil Chakravarthy</h1>
            <p className="role">CEO / Managing Director</p>
            <p className="company">Techno Soft Solutions</p>
            <div className="icons-container">
              <BsFacebook className="icon fb" />
              <AiFillTwitterCircle className="icon twi" />
              <FaInstagramSquare className="icon" />

              <BsLinkedin className="icon lin" />
              <FaSnapchat className="icon snp" />
            </div>
          </div>
        </div>
        <div className="button-container">
          <Popup
            modal
            trigger={
              <button type="button" className="share-button">
                SHARE
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <button
                  className="close-button"
                  type="button"
                  testid="closeButton"
                  onClick={() => close()}
                >
                  <IoMdClose size={20} color="#231f20" />
                </button>
                <div className="input-container">
                  <h1 className="share-heading">
                    Sharing <span className="span">Akhil Chakravarthy`s</span>{' '}
                    Tako Card
                  </h1>
                  <input
                    placeholder="Full Name"
                    type="text"
                    className="input"
                  />
                  <form className="form">
                    <div>
                      <input type="radio" id="whatsapp" />
                      <label htmlFor="whatsapp">Whatsapp</label>
                    </div>
                    <div>
                      <input type="radio" id="sms" />
                      <label htmlFor="sms">SMS</label>
                    </div>

                    <div>
                      <input type="radio" id="email" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </form>
                  <input
                    placeholder="Enter Phone Number / Enter Email"
                    type="text"
                    className="input"
                  />
                  <div className="submit-container">
                    <button type="button" className="submit-button">
                      Submit
                      <IoIosArrowForward className="arrow" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div className="large-icon-section">
          <FaPhoneAlt className="large-icon" />
          <RiWhatsappFill className="large-icon-wat" />
          <AiOutlineMail className="large-icon" />
          <VscGlobe className="large-icon" />
        </div>
      </div>
    )
  }
}

export default ProfileSection
