import './Links.css'
import { FaGithub, FaCode, FaLaptopCode } from 'react-icons/fa'

function Links() {
  const links = [
    {
      id: 1,
      title: "GitHub",
      url: "https://github.com/Srinithi1916",
      icon: <FaGithub />
    },
    {
      id: 2,
      title: "LeetCode",
      url: "https://leetcode.com/u/srinithisrinithi09/",
      icon: <FaLaptopCode />
    },
    {
      id: 3,
      title: "CodeChef",
      url: "https://www.codechef.com/users/srinithisrinit",
      icon: <FaCode />
    }
  ]

  return (
    <section className="links">
      <h2>Coding Profiles</h2>
      <div className="links-grid">
        {links.map(link => (
          <a 
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            {link.icon}
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Links