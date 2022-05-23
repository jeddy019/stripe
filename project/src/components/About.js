export default function About() {
  return (
    <section className="section about-section">
      <h1 className="section-title">about this app</h1>
      <p>
        Hi, thanks for checking out this App. My name is Jedidiah Akinboyowa and
        I am a Full-Stack Javascript Developer. This Application analyzes your
        images and tells you what's inside of them. When you submit an image
        either by an image url or by uploading an image file, the API will
        return a list of predicted concepts (tags/keywords) with corresponding
        probabilities of how likely it is these predictions are contained within
        the image
      </p>
      <p>
        User Authentication is not yet implemented in this App so{" "}
        <strong>
          you can simply click on "Sign in" without filling any fields and the
          App will route to the Home Page where you can input or upload any
          image of your choice
        </strong>
        . Remember to submit your image for analysis by clicking the "analyze"
        button. I also recommend that you use the Navbar and routing buttons for
        navigation and routing to different pages in this app.
      </p>
      <p>
        I created this Application using HTML5, CSS3, Javacript and ReactJS, it
        uses an image recognition API called Clarifai (Clarifai is an artificial
        intelligence company that specializes in computer vision and uses
        machine learning and deep neural networks to identify and analyze images
        and videos), and it's own server using NodeJS and ExpressJS
      </p>
      <p>
        Thanks again for checking out this App and I hope you enjoy it! You can
        always find me on{" "}
        <a href="https://github.com/jeddy019" target="_blank" rel="noreferrer">
          My github page
        </a>{" "}
        and <a href="mailto:jeddy019@gmail.com">My email</a>
        {"."}
      </p>
    </section>
  );
}
