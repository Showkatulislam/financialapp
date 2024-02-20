import ReportTitle from "@/app/components/report-title";
interface activityProps{
  extrainfo:any
}
export const Activity = ({extrainfo}:activityProps) => {
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="ACTIVITY" />
      <div>
        <h3 className="font-semibold text-base">Nace</h3>
        <p className="text-sm">{extrainfo?.nace}</p>
      </div>
    </div>
  );
};
