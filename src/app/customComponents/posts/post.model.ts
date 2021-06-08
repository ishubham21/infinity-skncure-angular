export class Post {
  public id: any;
  public img: string;
  public text: string;
  public supports: number;
  public owner: string;
  public onlyMe: boolean;
  public userProfileImage: any;
  public userName: any;

  constructor(
    id: any,
    img: string,
    text: string,
    supports: number,
    owner: string,
    onlyMe: boolean,
    userProfileImage: any,
    userName: any
  ) {
    this.id = id;
    this.img = img;
    this.text = text;
    this.supports = supports;
    this.owner = owner;
    this.onlyMe = onlyMe;
    this.userProfileImage = userProfileImage;
    this.userName = userName;
  }
}
