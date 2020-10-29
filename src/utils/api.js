export const getProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/products`); // || 'https://localhost:1337'

  return res.json();
};

export const sendMail = async (mail) => {
  const res = await fetch(
    `${process.env.API_URL}/email`, // || 'https://localhost:1337'
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mail),
    }
  );

  return res;
};
