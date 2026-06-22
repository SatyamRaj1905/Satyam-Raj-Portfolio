import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiExternalLink,
  FiFileText,
  FiFolder,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTool,
  FiUser,
  FiCpu
} from 'react-icons/fi';
import { SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';

export const appIconMap = {
  profile: FiUser,
  works: FiBriefcase,
  projects: FiCode,
  tools: FiTool,
  education: FiBookOpen,
  awards: FiAward,
  contact: FiMail,
  resume: FiFileText,
  folder: FiFolder
};

export const socialIconMap = {
  phone: FiPhone,
  email: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
  leetcode: SiLeetcode,
  cses: FaLaptopCode,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
  external: FiExternalLink,
  cpu: FiCpu
};
