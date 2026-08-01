import degreePic from '../assets/degree_pic.JPG'

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Jacob Namath</h1>
      </section>

      <section className="stats">
        <div className="stat">
          <h3>Education</h3>
          <p>B.S. Data Science, University of Vermont</p>
          <p>Magna Cum Laude</p>
        </div>
        <div className="stat">
          <h3>Current Role</h3>
          <p>TrackMan Analyst, Vermont Lake Monsters</p>
        </div>
        <div className="stat">
          <h3>Location</h3>
          <p>Burlington, VT</p>
          <p>Washington, D.C.</p>
        </div>
      </section>

      <section className="photo-feature">
        <img src={degreePic} alt="Jacob at graduation" className="feature-photo" />
      </section>

      <section className="about">
        <h2>About</h2>
        <p>
          Hi, my name is Jacob. I recently graduated from The University of Vermont with a Bachelors of Science in Data Science.
          Work-life balance is important, being able to get outside and spend time with people you care about is the key
          to good, thorough work. I love building, taking apart, and understanding how things work.
          I enjoy creative solutions and puzzle solving to get to
          the root of a problem. It is important for me to work in an open, friendly environment,
          people can't do their best work if they feel like they can't ask questions.
        </p>
        <p>
          I like music, getting outside, whether that's hiking, fishing, or just sitting,
          cooking, sports and sports analytics, video games and board games, and I like connecting with people.
          I think I can be a great asset in many roles, I am adaptable, thoughtful, trustworthy, capable, and determined.
          I always put my best work forward and I hope to contribute meaningful work.
        </p>
      </section>
    </>
  )
}

export default Home