import { onePeopleModel } from "../logic/model";
import styles from "./style/onePeople.module.css";

export default function OnePeople(props: { onePeopleModel: onePeopleModel }) {
  return (
    <tr id={styles.people}>
      <td id={styles.nameArea}>{props.onePeopleModel.name}</td>
      <ColorChangeTd min={-1.0} max={1.0}>
        {props.onePeopleModel.happiness}
      </ColorChangeTd>
      <ColorChangeTd min={-1.0} max={1.0}>
        {Math.round(props.onePeopleModel.character.firstImpression * 100) / 100}
      </ColorChangeTd>
    </tr>
  );
}

function ColorChangeTd(props: { min: number; max: number; children: number }) {
  const colorArray = [
    "rgb(166, 0, 255)",
    "rgb(185, 54, 255)",
    "rgb(207, 117, 255)",
    "rgb(233, 191, 255)",
    "rgb(255, 255, 255)",
    "rgb(255, 193, 223)",
    "rgb(255, 107, 179)",
    "rgb(255, 67, 158)",
    "rgb(255, 0, 123)",
  ];
  const oneRange = (props.max - props.min) / colorArray.length;
  const color = colorArray.find(
    (val, index) =>
      props.min + oneRange * index <= props.children &&
      props.children <= props.max - oneRange * (colorArray.length - 1 - index)
  );
  return <td style={{ backgroundColor: color }}>{props.children}</td>;
}
