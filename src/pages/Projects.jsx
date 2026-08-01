import { Code2, FileText } from 'lucide-react'

const projects = [
  {
    title: 'Umpire Report Generator',
    tech: 'R, ggplot2',
    blurb:
      "I built two R-based reporting tools for the Vermont Lake Monsters, one that checks umpire strike-zone accuracy and another that breaks down individual at-bats. They turn raw TrackMan pitch-tracking data into multi-page PDF reports for the coaching staff. Each at-bat shows pitches labeled in sequence, with the outcome of each one (strike, ball, foul, in play) marked on a strike-zone visual that includes a buffer for borderline calls. This helps the coaching staff prepare for each umpire's tendencies, and helps the team see how they approach an at-bat on both sides of the ball.",
    github: null,
    samples: [
      { label: 'Sample Umpire Report', href: '/sample_umpire_report.pdf' },
      { label: 'Sample At-Bat Report', href: '/sample_atbat_report.pdf' },
    ],
  },
  {
    title: 'Corporate vs Territorial Emissions',
    tech: 'R, Python, PCA, Regression Analysis, Data Visualization',
    blurb:
      "I worked on a capstone project analyzing what we called the Corporate Attribution Ratio, which compares how much of a country's fossil fuel emissions come from companies headquartered there versus emissions that actually happen within its borders. I cleaned and merged data from three separate global datasets covering around 50 countries from 2000 to 2020. My analysis looked at the difference between production based and territorial emissions per capita, then tested how that ratio related to GDP and to renewable energy policy scores using different correlations to confirm based on the context of the data. I also ran a principal component analysis to reduce eleven emissions related variables down to three key dimensions, then built a regression model using those components to predict the ratio. The renewable energy policy connection turned out to be the more consistent finding, GDP alone didn't explain much of the variation.",
    github: null,
    samples: [
      { label: 'Full Report', href: '/capstone_report.pdf' },
    ],
  },
  {
    title: 'NFL Award Prediction Model',
    tech: 'Python, scikit-learn, XGBoost, Ensemble Methods, Feature Engineering',
    blurb:
      "I worked on a project to predict the winners of the NFL's five major AP awards: MVP, Offensive and Defensive Player of the Year, and Offensive and Defensive Rookie of the Year. We used player stats from Pro Football Reference and engineered features like yards per attempt and sack conversion rate, since efficiency stats tend to predict voting better than raw totals. We tested both regression models, which predicted vote totals, and classification models, which predicted the probability of winning, then compared how each performed. Our best results came from ensemble models that combined Random Forest, Neural Networks, and XGBoost, which consistently beat any single algorithm on its own. One of the more interesting findings was with Defensive Rookie of the Year. Regression models did worse than just guessing the average, since so few players get votes each year. Reframing it as a simple win or lose classification problem instead got the model to over 80 percent accuracy, which showed us that picking the right type of model mattered just as much as tuning it well.",
    github: 'https://github.com/jacobnamath/CS3540-FinalProject',
    samples: null,
  },
  {
    title: 'Yahtzee Game',
    tech: 'Java, Object-Oriented Design',
    blurb:
      "I built a console based Yahtzee game in Java to practice object oriented design. Each of the 13 scoring categories (like three of a kind, full house, and the straights) is its own class that inherits from an abstract Category class, so scoring logic for each one is self contained and easy to test on its own. The game handles a full turn structure, including rerolling dice up to three times and tracking each player's scorecard, along with proper Yahtzee bonus scoring if you roll a second one.",
    github: 'https://github.com/jacobnamath/yahtzee-java',
    samples: null,
  },
  {
    title: 'Shark Attack Analysis',
    tech: 'R, Classification Trees, KNN, Data Cleaning',
    blurb:
      "I worked on a project analyzing the Global Shark Attack File, a dataset of shark attack incidents from around the world. A lot of the work involved cleaning messy data, inconsistent date formats, free text fields, and unreliable age values, before any real analysis was possible. After exploring patterns by species, year, sex, and season, I helped build two models: a classification tree that predicted whether an attack happened during summer with about 78 percent accuracy, and a k nearest neighbors model, tuned using 5 fold cross validation, that predicted whether an attack was fatal based on the victim's age and sex.",
    github: 'https://github.com/jacobnamath/shark-attack-analysis',
    samples: null,
  },
]

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <p className="projects-intro">
        A range of data science work spanning statistical analysis, machine learning, and
        domain-specific analytics from sports data to environmental policy research.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-entry" key={project.title}>
            <div className="project-entry-header">
              <h3>{project.title}</h3>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github-link">
                  <Code2 size={18} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
            <p className="project-tech">{project.tech}</p>
            <p>{project.blurb}</p>
            {project.samples && (
              <div className="project-samples">
                {project.samples.map((sample) => (
                  <a key={sample.label} href={sample.href} target="_blank" rel="noopener noreferrer" className="project-sample-link">
                    <FileText size={16} />
                    <span>{sample.label}</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects