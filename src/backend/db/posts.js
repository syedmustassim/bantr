import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "I got a feeling we are not in Kansas anymore.",
    mediaURL: "https://i.postimg.cc/Y0zQy7sT/lasso-kansas.png",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tedlasso",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Sometimes, all we got to do, is Believe. :)",
    mediaURL: "https://i.postimg.cc/tRxDwkh2/ted-believe.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tedlasso",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I know how this looks…but if The Cure has taught us anything, great things can happen when you’re down in the dumps.",
    mediaURL: "https://i.postimg.cc/RFy3BczB/lasso-dump.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tedlasso",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Three powerful badass babes walk into a pub… no punchline here. 💕😜",
    mediaURL: "https://i.postimg.cc/0QdjKhTV/keeley-post-1.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "imkeeley",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "New office. Same 💕🐆",
    mediaURL: "https://i.postimg.cc/bYmNX0pS/keeley-post-2.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "imkeeley",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "That was some fun night in Amsterdam",
    mediaURL: "https://i.postimg.cc/nrWGNs3j/rebecca-post-1.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rebeccawelton",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "What a wonderful Christmas!",
    mediaURL: "https://i.postimg.cc/3J7GJFv8/rebecca-post-2.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rebeccawelton",
    createdAt: "2022-12-25T01:06:00+05:30",
    updatedAt: "2022-12-25T01:06:00+05:30",
  },
  {
    _id: uuid(),
    content: "Greyhounds. We rule.",
    mediaURL: "https://i.postimg.cc/SNST9kpM/team.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jamieisawesome",
    createdAt: "2022-06-14T01:08:00+05:30",
    updatedAt: "2022-06-14T01:08:00+05:30",
  },
  {
    _id: uuid(),
    content: "Drinks with the slowpoke after the auction!",
    mediaURL: "https://i.postimg.cc/R0kc45mh/jamie-post-2.png",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jamieisawesome",
    createdAt: "2021-08-11T01:04:00+05:30",
    updatedAt: "2021-08-11T01:04:00+05:30",
  },
  {
    _id: uuid(),
    content:
      "Man, I miss this show so much, I ended up creating Bantr. Sorry Keeley.",
    mediaURL: "https://i.postimg.cc/FzYBfXqS/richmond-two.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mustassim",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
