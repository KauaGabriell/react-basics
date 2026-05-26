type Props = {
  name: string;
  onClick?(): void;
};
export function Button(props: Props) {
  return <button onClick={props.onClick}>{props.name}</button>;
}
