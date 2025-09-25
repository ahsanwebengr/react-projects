import { useState } from 'react';

const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (data.isFolder) {
    return (
      <div>
        <div className='folder' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '📂' : '📁'} {data.name}
        </div>

        {isOpen && (
          <div className='children'>
            {data.children?.map((child, index) => (
              <Folder key={index} data={child} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <div className='file'>📄 {data.name}</div>;
  }
};

export default Folder;
