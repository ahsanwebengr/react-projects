import Folder from './Folder';
import { folderData } from './data';
import './index.css';

function App() {
  return (
    <div className='tree-view'>
      <h2>📂 Tree View Folder Structure</h2>
      <Folder data={folderData} />
    </div>
  );
}

export default App;
