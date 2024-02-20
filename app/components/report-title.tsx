const ReportTitle = ({ title }: { title: string }) => {
  return (
    <div className="bg-blue-500 p-0.5 lg:p-1  mb-3 text-white font-semibold lg:text-2xl">
      {title}
    </div>
  );
};

export default ReportTitle;
