type Props = React.ComponentProps<"button"> & {
  name: string;
};
export function Button({ onClick, name }: Props) {
  return <button onClick={onClick}>{name}</button>;
}
