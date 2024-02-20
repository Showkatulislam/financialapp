interface titleprops{
    title:string,
}
const Title = ({title}:titleprops) => {
    return (
        <div className="text-center bg-sky-600 p-1">
            {title}
        </div>
    );
};

export default Title;