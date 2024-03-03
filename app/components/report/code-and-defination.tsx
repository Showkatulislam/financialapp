import { Payments, riskRating } from "@/public/dropdownData";
import ReportTitle from "../report-title";
import { cn } from "@/lib/utils";
import { Paymentscolors, Riskcolors } from "@/app/data/routes";

export const CodeAndDefination = () => {
  return (
    <div>
      <ReportTitle title="Code and Definations" />
      <div className="flex flex-col space-y-2">
        <p>Risk</p>
        <ol >
          {riskRating.map((r, i) => (
            <span className={cn(Riskcolors[i])} key={i}>
              {i + 1} . {r}
            </span>
          ))}
        </ol>
        <p>Payment</p>
        <ol>
          {Payments.map((r, i) => (
            <li className={cn(Paymentscolors[i])} key={i}>
              {i + 1} .{r}
            </li>
          ))}
        </ol>
        <ol>
          <li>
            “Recommended outstanding amount” represents the highest amount that
            we can recommend for a transaction to purchase goods or services
            from a supplier, with a payment term of 90 days. This assessment is
            based on the assumption that the company deals with five suppliers
            simultaneously over a given period.
          </li>
          <li>
            It is calculated by taking into consideration the figures of the
            company, its sector of activity, its commercial morality
          </li>
          <li>
            the situation linked to Covid-19, the economic situation of the
            country, the country risk, etc
          </li>
          <li>
            We undertake to use all available means without being bound by any
            obligations of result.
          </li>
          <li>
            We respect the legal framework during our investigations, which
            remain confidential.
          </li>
          <li>This report may not be published, distributed or resold.</li>
          <li>
            No legal liability is accepted for any possible loss in respect of
            this report prepared at your request.
          </li>
        </ol>
      </div>
    </div>
  );
};
