import { get } from "http";
import connection from "../dbconfig";
import { v4 as uuid } from "uuid";

class Like {
  id: string;
  userId: string;
  charityId: string;
  dateLiked: string;

  constructor(
    id: string,
    userId: string,
    charityId: string,
    dateLiked: string
  ) {
    this.id = id;
    this.userId = userId;
    this.charityId = charityId;
    this.dateLiked = dateLiked;
  }

  static getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = day + "-" + month + "-" + year;
    return date;
  }

  static create(request: any, callback: (error: Error | null) => void) {
    const requestAsJSON = JSON.parse(request);
    const likeID: string = uuid();
    const like: Like = {
      id: likeID,
      userId: requestAsJSON.userId,
      charityId: requestAsJSON.charityId,
      dateLiked: this.getDate(),
    };
    connection.query(
      `INSERT INTO likes (id, userId, charityId, dateLiked) VALUES ('${like.id}', '${like.userId}', '${like.charityId}', '${like.dateLiked}')`,
      (error) => {
        if (error) {
          callback(error);
        } else {
          callback(null);
        }
      }
    );
  }

  static remove(request: any, callback: (error: Error | null) => void) {
    try {
      const requestAsJSON = JSON.parse(request);
      connection.query(
        `DELETE * FROM Likes WHERE id=${requestAsJSON.id}`,
        (error, results) => {}
      );
    } catch (error) {
      console.log("Error: ", error);
      callback(error as Error);
    }
  }
}

export default Like;
