import GitHubIcon from '../images/icon-github.svg';
import LinkedInIcon from '../images/icon-linkedin.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import DriveIcon from '../images/resume.svg';

interface SocialLinksProps {
  imageLink: string;
  altTag: string;
  hrefLink: string;
}

export const socialLinks: SocialLinksProps[] = [
  {
    imageLink: GitHubIcon,
    altTag: 'GitHub icon',
    hrefLink: 'https://github.com/neeraj2612',
  },
  {
    imageLink: LinkedInIcon,
    altTag: 'LinkedIn icon',
    hrefLink: 'https://www.linkedin.com/in/neeraj-saini-b83146315/',
  },
  {
    imageLink: TwitterIcon,
    altTag: 'Twitter icon',
    hrefLink: 'https://twitter.com/',
  },
  {
    imageLink: DriveIcon,
    altTag: 'Google Drive icon',
    hrefLink:
      'https://drive.google.com/file/d/1pAf6RJJP6d0Gk2dcFHzsNHRiXW2nqKCL/view',
  },
];
