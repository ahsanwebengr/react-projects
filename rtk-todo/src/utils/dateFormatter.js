const dateFormat = inputDate => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const dateObject = new Date(inputDate);

  const formattedDate = dateObject.toLocaleDateString('en-US', options);
  return formattedDate;
};

export { dateFormat };
