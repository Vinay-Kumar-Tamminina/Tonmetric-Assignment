import './index.css'

const Videos = () => (
  <div className="videos-container">
    <h1 className="vid-heading">Videos</h1>
    <p className="vid-description">
      Lorem Ipsum is simply dummy text of the parinting and typesettig industry.
      Lorem Ipsum has been the industry`s standard dummy te ever since the
      1500s.
    </p>
    <div className="videos">
      <div className="videos-set">
        <iframe
          title="video"
          className="embed-responsive-item vid-margin"
          src="https://www.youtube.com/embed/vKJ6nXE_6Hc?rel=0"
          allowFullScreen
        >
          video
        </iframe>
        <iframe
          title="video"
          className="embed-responsive-item vid-margin"
          src="https://www.youtube.com/embed/vKJ6nXE_6Hc?rel=0"
          allowFullScreen
        >
          video
        </iframe>
      </div>
      <div className="videos-set">
        <iframe
          title="video"
          className="embed-responsive-item vid-margin"
          src="https://www.youtube.com/embed/vKJ6nXE_6Hc?rel=0"
          allowFullScreen
        >
          video
        </iframe>
        <iframe
          title="video"
          className="embed-responsive-item vid-margin"
          src="https://www.youtube.com/embed/vKJ6nXE_6Hc?rel=0"
          allowFullScreen
        >
          video
        </iframe>
      </div>
    </div>
  </div>
)

export default Videos
