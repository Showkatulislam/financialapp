interface titleprops {
  title: string;
}
const Title = ({ title }: titleprops) => {
  return <div className="text-center uppercase font-bold border-2 p-2 border-zinc-600 shadow-lg bg:bg-zinc-900 bg-white">{title}</div>;
};

export default Title;
