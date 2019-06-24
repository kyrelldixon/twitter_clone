const RANDOM_ICON_URL = 'https://randomuser.me/api/portraits';
const RANDOM_ICON_DATA = [
  {
    gender: 'women',
    imageCount: 100
  },
  {
    gender: 'men',
    imageCount: 100
  },
  {
    gender: 'lego',
    imageCount: 10
  },
];

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

const generateRandomIconUrl = () => {
  const randomIndex = getRandomNumberBetween(0,RANDOM_ICON_DATA.length);
  const randomIconData = RANDOM_ICON_DATA[randomIndex];
  const filename = `${getRandomNumberBetween(0, randomIconData.imageCount)}.jpg`
  return `${RANDOM_ICON_URL}/${randomIconData.gender}/${filename}`;
}

export { generateRandomIconUrl };