import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 101,
    firstName: "Ted",
    lastName: "Lasso",
    username: "tedlasso",
    password: "tedlasso123",
    profileImg: "https://i.postimg.cc/G2Q8d9s7/ted.png",
    backgroundImg: "https://i.postimg.cc/59ndTr3q/ted-henry.jpg",
    bio: "Be a goldfish.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: 102,
        firstName: "Rebecca",
        lastName: "Welton",
        username: "rebeccawelton",
        profileImg: "https://i.postimg.cc/L8Fc1M6S/rebecca.jpg",
      },
      {
        _id: 103,
        firstName: "Roy",
        lastName: "Kent",
        username: "roykent",
        profileImg: "https://i.postimg.cc/m27HwQR9/roy-kent.jpg",
      },
    ],
    following: [
      {
        _id: 102,
        firstName: "Rebecca",
        lastName: "Welton",
        username: "rebeccawelton",
        profileImg: "https://i.postimg.cc/L8Fc1M6S/rebecca.jpg",
      },
      {
        _id: 103,
        firstName: "Roy",
        lastName: "Kent",
        username: "roykent",
        profileImg: "https://i.postimg.cc/m27HwQR9/roy-kent.jpg",
      },
    ],
    bookmarks: [],
  },
];
