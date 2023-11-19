import randomName from "./randomName";

export class MainModel {
  model: {
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
  }[];

  constructor() {
    this.model = [];
    this.resetModel(40);
  }

  resetModel(numberOfPeople: number) {
    //モデルの初期化
    this.model = [];

    //人間関係の配列を生成する際に最低限必要な情報を生成
    const firstSettingArray: {
      id: string;
      name: string;
      firstImpression: number;
    }[] = [];
    for (let i = 0; i < numberOfPeople; i++) {
      firstSettingArray.push({
        id: crypto.randomUUID(),
        name: randomName(),
        firstImpression: Math.random() * 1.6 - 0.8,
      });
    }

    //モデルを生成していく
    for (let i = 0; i < numberOfPeople; i++) {
      let restOfChara = 10;
      const charaArr: number[] = [];
      for (let charaNum = 0; charaNum < 3; charaNum++) {
        if (charaNum != 2) {
          charaArr.push(Math.random() * restOfChara);
          restOfChara -= charaArr[charaNum];
        } else {
          charaArr.push(restOfChara);
        }
      }
      this.model.push({
        id: firstSettingArray[i].id,
        name: firstSettingArray[i].name,
        happiness: 0.0,
        character: {
          a: charaArr[0],
          b: charaArr[1],
          c: charaArr[2],
          firstImpression: firstSettingArray[i].firstImpression,
        },
        relationships: firstSettingArray
          .map((onePeople) => {
            if (onePeople.id === firstSettingArray[i].id) return;
            return {
              id: onePeople.id,
              name: onePeople.name,
              impression: Math.random() * 0.4 + onePeople.firstImpression - 0.2,
              closeness: 0,
              myImpression: 0.0,
              myRelativePosition: 0.0,
            };
          })
          .flatMap((data) => data ?? []),
      });
    }
  }
  debugModel() {
    console.log(this.model);
  }
}
