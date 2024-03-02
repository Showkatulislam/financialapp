interface titleprops {
  title: string;
}
const Title = ({ title }: titleprops) => {
  return <div className="text-center uppercase font-bold border-2 p-2 border-zinc-600 shadow-lg ">{title}</div>;
};

export default Title;
