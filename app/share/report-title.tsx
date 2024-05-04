const ReportTitle = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#0f60a2] p-0.5 px-5 lg:p-1  mb-3 text-white font-semibold lg:text-2xl">
      {title}
    </div>
  );
};

export default ReportTitle;
