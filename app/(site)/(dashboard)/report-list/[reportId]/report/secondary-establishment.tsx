import ReportTitle from "@/app/components/report-title";

interface SecondaryEstablishmentprops{
  extrainfo:any
}
export const SecondaryEstablishment = ({extrainfo}:SecondaryEstablishmentprops) => {
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="SECONDARY ESTABLISHMENTS" />
      <div>
        <p className="text-justify">
          {extrainfo?.secondyestablishment}
        </p>
      </div>
    </div>
  );
};
