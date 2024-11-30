export type TChannel = {
  id: string;
  name: string;
  removable:  boolean;
}

export type TMessage = {
  id: number;
  body: string;
  channelId: string;
  username:  string;
}