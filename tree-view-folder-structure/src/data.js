export const folderData = {
  name: 'root',
  isFolder: true,
  children: [
    {
      name: 'src',
      isFolder: true,
      children: [
        {
          name: 'components',
          isFolder: true,
          children: [
            { name: 'Navbar.jsx', isFolder: false },
            { name: 'Button.jsx', isFolder: false },
          ],
        },
        {
          name: 'assets',
          isFolder: true,
          children: [
            {
              name: 'images',
              isFolder: true,
              children: [{ name: 'logo.svg', isFolder: false }, { name: 'bg.png', isFolder: false }],
            },
            {
              name: 'css',
              isFolder: true,
              children: [{ name: 'style.css', isFolder: false }],
            },
            {
              name: 'fonts',
              isFolder: true,
              children: [
                { name: 'Montserrat-Regular.ttf', isFolder: false },
                { name: 'OpenSans-Regular.ttf', isFolder: false },
                { name: 'OpenSans-Bold.ttf', isFolder: false },
              ],
            },
          ],
        },
        {
          name: 'pages',
          isFolder: true,
          children: [
            { name: 'Home.jsx', isFolder: false },
            { name: 'About.jsx', isFolder: false },
          ],
        },
      ],
    },

    { name: 'index.html', isFolder: false },
    { name: 'App.jsx', isFolder: false },
    { name: 'main.jsx', isFolder: false },
    { name: 'package.json', isFolder: false },
  ],
};
