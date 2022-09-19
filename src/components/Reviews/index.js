import {AiFillStar} from 'react-icons/ai'
import {GiSevenPointedStar} from 'react-icons/gi'
import './index.css'

const Reviews = () => (
  <div className="reviews-container">
    <h1 className="rew-heading">Reviews</h1>
    <div className="all-reviews-container">
      <div className="rating-container">
        <div className="all-stars">
          <div className="rating-star">
            <img
              className="star-size"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
            <img
              className="star-size"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
            <img
              className="star-size"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
            <img
              className="star-size"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
            <img
              className="star-size"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
            <h1 className="rew-rating">5/5</h1>
          </div>
          <p className="all-reviews"> 136 Reviews</p>
        </div>
        <p className="review-text"> Write a review</p>
      </div>
      <div className="comments-container">
        <div className="each-comment">
          <div>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
              alt="person"
            />
            <AiFillStar className="img-star-size" />
          </div>
          <div className="reply">
            <p className="person-comment">
              Truly a professional <span className="span">people</span> to get
              your service done with them
            </p>
            <div className="full-stars">
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
            </div>
          </div>
        </div>
        <div className="each-comment">
          <div>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"
              alt="person"
            />
          </div>
          <div className="reply">
            <p className="person-comment">
              The <span className="span">quality</span> of their work is
              impeccable and amazing
            </p>
            <div className="full-stars">
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
            </div>
          </div>
        </div>
        <div className="each-comment">
          <div>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png"
              alt="person"
            />
            <GiSevenPointedStar className="img-star-size" />
          </div>
          <div className="reply">
            <p className="person-comment">
              Truly a professional <span className="span">people</span> to get
              your service done with them
            </p>
            <div className="full-stars">
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
              <AiFillStar className="full-stars-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="www.google.com" className="view-all">
      View all reviews
    </a>
  </div>
)

export default Reviews
