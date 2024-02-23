import ReportTitle from "../report-title";

export const CodeAndDefination = () => {
  return (
    <div>
      <ReportTitle title="Code and Definations" />
      <div className="flex flex-col space-y-2">

        <ol type="1" >
        <li>Excellent Risk</li>
        <li>Very Low Risk</li>
        <li>Low Risk</li>
        <li>Moderate Risk</li>
        <li>Acceptable Risk</li>
        <li>Moderately High Risk</li>
        <li>Significant Insolvency Risk</li>
        <li>High Risk</li>
        <li>Very High Risk</li>
        <li>Extremely High Risk</li>
        <li>Undefined Risk</li>
        </ol>
      </div>
    </div>
  );
};
