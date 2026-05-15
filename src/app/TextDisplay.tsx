export default function TextDisplay({ group }: Readonly<{ group: string }>) {
  const text = `On a quiet morning, several people visited the local library to read, study, and borrow books. A student worked on homework at one table while another visitor looked through a magazine nearby. The library was calm and quiet, and people spoke softly as they moved between the shelves. Outside, a few people walked past on their way to work and school. ${group}`;

  const font = group === "b" ? "font-fascinate" : "font-atkinson";
  return <div className={`${font} max-w-[35ch]`}>{text}</div>;
}
