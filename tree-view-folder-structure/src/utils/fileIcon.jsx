import { FaJs, FaCss3Alt, FaFileCode, FaReact, FaRegFileImage } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';
import { SiHtml5 } from 'react-icons/si';
import { ImSvg } from 'react-icons/im';

export const getFileIcon = fileName => {
  if (fileName.endsWith('.js')) return <FaJs color='yellow' />;
  if (fileName.endsWith('.css')) return <FaCss3Alt color='blue' />;
  if (fileName.endsWith('.json')) return <VscJson color='yellow' />;
  if (fileName.endsWith('.html')) return <SiHtml5 color='red' />;
  if (fileName.endsWith('.ttf')) return <FaFileCode color='purple' />;
  if (fileName.endsWith('.jsx')) return <FaReact color='lightblue' />;
  if (fileName.endsWith('.png')) return <FaRegFileImage color='lightgreen' />;
  if (fileName.endsWith('.jpg')) return <FaRegFileImage color='lightgreen' />;
  if (fileName.endsWith('.jpge')) return <FaRegFileImage color='lightgreen' />;
  if (fileName.endsWith('.webp')) return <FaRegFileImage color='lightgreen' />;
  if (fileName.endsWith('.avif')) return <FaRegFileImage color='lightgreen' />;
  if (fileName.endsWith('.svg')) return <ImSvg color='yellow' />;
  return <FaFileCode color='gray' />;
};
