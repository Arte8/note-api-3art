const urlFor = (endpoint) => {
  return 'https://note-app-3art.herokuapp.com/notes' + endpoint;
  // return 'http://localhost:3000/' + endpoint;
};

export default urlFor;