import { fetchbooks } from "./Actiontype";
const data = [
  {
    bookname: "the william habby",
    bookdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    bookimagepath:
      "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    uploadby: "riyazur",
    upload_at: "23 mar 2001",
    isasked: false,
    askedby: "Ragul"
  },
  {
    bookname: "the william habby",
    bookdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    bookimagepath:
      "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    uploadby: "riyazur",
    upload_at: "23 mar 2001",
    isasked: false,
    askedby: "Ragul"
  },
  {
    bookname: "the william habby",
    bookdesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    bookimagepath:
      "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    uploadby: "riyazur",
    upload_at: "23 mar 2001",
    isasked: false,
    askedby: "Ragul"
  }
];
export const getBooks = () => {
  return { type: fetchbooks, payload: data };
};
