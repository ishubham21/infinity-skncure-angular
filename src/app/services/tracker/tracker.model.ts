export class Tracker {
  public id: string;
  public owner: string;
  public illness: any;

  constructor(id: string, owner: string, illness: any) {
    this.id = id;
    this.owner = owner;
    this.illness = illness;
  }
}
