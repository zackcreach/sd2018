import React from 'react'
import { Link } from 'gatsby'

import '../styles/styles.scss'
import { css } from 'emotion'

const links = [
  { title: 'About', link: '/about' },
  { title: 'Photos', link: '/photos' },
  { title: 'Resume', link: '/resume' },
  { title: 'Clips', link: '/clips' },
  { title: 'Voiceover', link: '/voiceover' },
  { title: 'Contact', link: '/contact' },
]

const Navigation = ({ dots }) => (
  <ul className={navigation}>
    {links.map(node => (
      <>
        <li className={node.title === 'Photos' ? hideOnDesktop : ''}>
          <Link to={node.link}>{node.title}</Link>
        </li>
        {dots && node.title !== 'Photos' ? (
          <span className={dotShow}>·</span>
        ) : (
          ''
        )}
      </>
    ))}
  </ul>
)

export default Navigation

const navigation = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (min-width: 430px) {
    justify-content: space-between;
    width: auto;
  }

  & a {
    color: var(--color-secondary);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.7rem;

    @media (min-width: 600px) {
      font-size: 0.8rem;
    }
  }

  & li {
    transition: all 0.35s ease;
    user-select: none;
  }

  & li:hover {
    color: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`
const hideOnDesktop = css`
  @media (min-width: 1200px) {
    display: none;
    visibility: hidden;
  }
`
const dotShow = css`
  display: none;

  @media (min-width: 430px) {
    display: inline;
    font-size: 1.5rem;
    color: var(--color-primary);
  }

  &:last-of-type {
    display: none;
  }
`
