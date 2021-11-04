import { library } from "../components/Sounds";

export const generateBase64Token = (news) => {
  try {
    const { text, sound } = news;

    const str = `${encodeURIComponent(text)}^${sound}`;

    return btoa(str);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const extractTokenPayload = (token) => {
  if (!token) return null;

  try {
    const str = atob(token);
    const [text, sound] = str.split("^");

    return { text: decodeURIComponent(text), sound };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSoundByIndex = (index) => {
  if (library[index]) return library[index];
  return null;
};
