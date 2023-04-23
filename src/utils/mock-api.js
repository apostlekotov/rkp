export const getProducts = async () => {
  const res = [
    {
      id: 1,
      title: 'Ікра форелі',
      photo: {
        formats: { medium: { url: '/img/forel.png' } }
      },
      price: 1599,
      weight: 500,
      old_price: 1705
    },
    {
      id: 2,
      title: 'Ікра кети',
      photo: {
        formats: { medium: { url: '/img/keti.png' } }
      },
      price: 2999,
      weight: 500,
      old_price: 3085
    }
  ];

  return res;
};

export const sendMail = async (mail) => {
  const res = { ok: true };

  return res;
};
