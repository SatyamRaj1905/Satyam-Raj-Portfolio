import { useMemo } from 'react';
import {
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone
} from 'react-icons/fi';
import Accordion from './Accordion.jsx';
import ExperienceCard from './ExperienceCard.jsx';
import ProjectCard from './ProjectCard.jsx';
import { socialIconMap } from './iconMaps.jsx';
import {
  achievements,
  artworkLink,
  education,
  experiences,
  profile,
  projects,
  skills,
  socials
} from '../data/portfolio.js';

const linkProps = { target: '_blank', rel: 'noreferrer' };

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function ProfileWindow({ openWindow }) {
  const activeSocials = socials.filter((item) => item.enabled && item.href);

  return (
    <div className="profile-window">
      <div className="profile-card">
        <div className="profile-card__avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <div>
          <p className="profile-card__hello">hi! i’m</p>
          <h1>{profile.name}</h1>
          <p className="profile-card__role">
            {profile.role} · {profile.company}
          </p>
        </div>
      </div>

      <p className="profile-window__summary">{profile.summary}</p>

      <div className="mini-stats">
        <div>
          <strong>Core Web Vitals</strong>
          <ul>
            <li>LCP P75 ~1.7s</li>
            <li>INP 64ms · CLS 0.01</li>
          </ul>
        </div>
        <div>
          <strong>Problem solving</strong>
          <ul>
            <li>DSA 500+ problems</li>
            <li>LeetCode 960+ submissions · CSES 250+ submissions</li>
          </ul>
        </div>
      </div>

      <div className="profile-actions">
        <a className="retro-button" href={profile.resume} target="_blank" rel="noreferrer">
          <FiDownload /> Resume
        </a>
        <button className="retro-button retro-button--ghost" type="button" onClick={() => openWindow('contact')}>
          <FiMail /> Contact
        </button>
      </div>

      <div className="social-grid">
        {activeSocials.map((item) => {
          const Icon = socialIconMap[item.icon] || socialIconMap.external;
          const props = item.id === 'phone' || item.id === 'email' ? {} : linkProps;
          return (
            <a key={item.id} href={item.href} className="social-chip" {...props}>
              <Icon />
              <span>{item.value}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function ExperienceWindow() {
  return (
    <div>
      <SectionTitle eyebrow="works.log" title="Experience / Works">
        Not just experience - this is my collection of “somehow, I made it work” moments.
      </SectionTitle>
      <div className="card-stack">
        {experiences.map((item) => (
          <ExperienceCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

function ProjectsWindow() {
  return (
    <div>
      <SectionTitle eyebrow="projects.exe" title="Selected Projects">
        "Where my curiosity went in and my weekends disappeared."
      </SectionTitle>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

function SkillsWindow() {
  return (
    <div>
      <SectionTitle eyebrow="tools.dll" title="Technical Skills">
         "If this folder ever stops changing, either I’ve mastered everything… or AI finally took my job."
      </SectionTitle>
      <div className="skills-board">
        {skills.map((group) => (
          <section className="skill-group" key={group.id}>
            <h3>{group.label}</h3>
            <div className="skill-pills">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function EducationWindow() {
  return (
    <div>
      <SectionTitle eyebrow="education.doc" title="Education">
        "A timeline of how “I’ll study from tomorrow” somehow turned into actual qualifications."
      </SectionTitle>
      <div className="education-list">
        {education.map((item) => (
          <article className="education-card" key={item.id}>
            <span className="retro-badge">{item.period}</span>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <span className="education-card__location">
              <FiMapPin /> {item.location}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

function AchievementsWindow() {
  return (
    <div>
      <SectionTitle eyebrow="awards.crt" title="Achievements">
        "My achievement shelf, but digital - less dust, more dopamine."
      </SectionTitle>
      <ol className="achievement-list">
        {achievements.map((achievement, index) => (
          <li key={achievement}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{achievement}</p>
          </li>
        ))}
      </ol>
      <a className="retro-link" href={artworkLink} target="_blank" rel="noreferrer">
        View commissioned/sketch work <FiExternalLink />
      </a>
    </div>
  );
}

function ContactWindow() {
  const contactLinks = [
    { href: profile.phoneHref, label: 'Phone', value: profile.phone, icon: FiPhone },
    { href: profile.emailHref, label: 'Email', value: profile.email, icon: FiMail },
    { href: profile.portfolio, label: 'Portfolio', value: 'Live website', icon: FiGlobe, external: true },
    { href: profile.links.github, label: 'GitHub', value: 'SatyamRaj1905', icon: FiGithub, external: true }
  ];

  return (
    <div className="contact-window">
      <SectionTitle eyebrow="contact.vcf" title="Let’s get in touch">
        "Drop a message here - I promise I reply better than most APIs."
      </SectionTitle>
      <div className="contact-grid contact-grid--direct">
        {contactLinks.map((item) => {
          const Icon = item.icon;
          const props = item.external ? linkProps : {};
          return (
            <a className="contact-card contact-card--link" href={item.href} key={item.label} {...props}>
              <span className="contact-card__icon" aria-hidden="true">
                <Icon />
              </span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.value}</small>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function ResumeWindow() {
  const items = useMemo(
    () => [
      {
        id: 'resume-experience',
        title: 'Experience',
        content: (
          <div className="resume-list">
            {experiences.map((item) => (
              <div key={item.id}>
                <strong>{item.title}</strong>
                <span>
                  {item.organization} · {item.period}
                </span>
              </div>
            ))}
          </div>
        )
      },
      {
        id: 'resume-projects',
        title: 'Projects',
        content: (
          <div className="resume-list">
            {projects.map((project) => (
              <div key={project.id}>
                <strong>{project.title}</strong>
                <span>{project.stack.join(', ')}</span>
              </div>
            ))}
          </div>
        )
      },
      {
        id: 'resume-skills',
        title: 'Technical Skills',
        content: (
          <div className="resume-skills">
            {skills.map((group) => (
              <p key={group.id}>
                <strong>{group.label}:</strong> {group.items.join(', ')}
              </p>
            ))}
          </div>
        )
      },
      {
        id: 'resume-education',
        title: 'Education',
        content: (
          <div className="resume-list">
            {education.map((item) => (
              <div key={item.id}>
                <strong>{item.institution}</strong>
                <span>
                  {item.degree} · {item.period}
                </span>
              </div>
            ))}
          </div>
        )
      },
      {
        id: 'resume-achievements',
        title: 'Achievements',
        content: (
          <ul className="resume-achievements">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        )
      }
    ],
    []
  );

  return (
    <div className="resume-window">
      <SectionTitle eyebrow="resume.pdf" title="Resume Explorer">
        "Download my resume - because apparently “trust me, I can code” is not enough."
      </SectionTitle>
      <div className="resume-actions">
        <a className="retro-button" href={profile.resume} target="_blank" rel="noreferrer">
          <FiDownload /> Open PDF Resume
        </a>
      </div>
      <Accordion items={items} defaultOpenId="resume-experience" />
    </div>
  );
}

export default function WindowContent({ id, openWindow }) {
  switch (id) {
    case 'profile':
      return <ProfileWindow openWindow={openWindow} />;
    case 'experience':
      return <ExperienceWindow />;
    case 'projects':
      return <ProjectsWindow />;
    case 'skills':
      return <SkillsWindow />;
    case 'education':
      return <EducationWindow />;
    case 'achievements':
      return <AchievementsWindow />;
    case 'contact':
      return <ContactWindow />;
    case 'resume':
      return <ResumeWindow />;
    default:
      return <ProfileWindow openWindow={openWindow} />;
  }
}
