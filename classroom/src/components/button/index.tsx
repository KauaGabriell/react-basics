import styles from "./button.module.css";

type Props = React.ComponentProps<"button"> & {
  name: string;
};
export function Button({ onClick, name }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
}
