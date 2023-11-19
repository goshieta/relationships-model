import styles from "./style/sidebarButton.module.css";

export default function SidebarButton(props: {
  imgName: string;
  onClick: () => any;
}) {
  return (
    <button onClick={props.onClick} id={styles.button}>
      <img src={`/appIcon/${props.imgName}.svg`} alt="" id={styles.buttonImg} />
    </button>
  );
}
