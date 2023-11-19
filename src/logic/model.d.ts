export type model = onePeopleModel[];

export type onePeopleModel = {
  id: string;
  name: string;
  happiness: number;
  character: {
    //幸福の要素それぞれにかける係数（これを正確として表現する）
    a: number;
    b: number;
    c: number;
    //見た目の印象みたいなもの
    firstImpression: number;
  };
  relationships: {
    id: string;
    name: string;
    impression: number;
    closeness: number;
    myImpression: number;
    myRelativePosition: number;
  }[];
};
