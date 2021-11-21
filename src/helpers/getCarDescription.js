export const getCarDescription = ({ make, model }) => {
  const url = `https://api.datamuse.com/words?ml=${make}`;
  const query = `&ml=${model}`;
  return fetch(`${url}${query}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.length > 0) {
        return response
          .slice(0, 10)
          .map((word) => word.word)
          .join(', ');
      } else {
        return `No description found for ${make} ${model}. Please click to update.`;
      }
    });
};
