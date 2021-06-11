export class Post {
  public id: any;
  public img: string;
  public text: string;
  public supportCount: any;
  public owner: string;
  public onlyMe: boolean;
  public userProfileImage: any;
  public userName: any;
  public createdAt: any;

  constructor(
    id: any,
    img: string,
    text: string,
    supportCount: any,
    owner: string,
    onlyMe: boolean,
    userProfileImage: any,
    userName: any,
    createdAt: any
  ) {
    this.id = id;
    this.img = img;
    this.text = text;
    this.supportCount = supportCount;
    this.owner = owner;
    this.onlyMe = onlyMe;
    this.userProfileImage = userProfileImage;
    this.userName = userName;
    this.createdAt = createdAt;
  }
}
