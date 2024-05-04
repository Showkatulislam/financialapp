import { Payments, riskRating, riskRatingFa } from "@/public/dropdownData";
import ReportTitle from "../report-title";
import { cn } from "@/lib/utils";
import { Paymentscolors, Riskcolors } from "@/app/constant/routes";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";

export const CodeAndDefination = () => {
  const { LAN } = useLanguage();
  const index = LAN == "EN" ? 0 : 1;
  const riskTemp = index == 0 ? riskRating : riskRatingFa;
  return (
    <div>
      <ReportTitle title={dic.CodeAndDefinationtitle[index]} />
      <div className="flex flex-col space-y-2 ">
        <p className="bg-[#ECECEC] p-2">{dic.risk[index]}</p>
        <ol className="space-x-2 p-2">
          {riskTemp.map((r, i) => (
            <span className={cn(Riskcolors[i])} key={i}>
              {i + 1} . {r}
            </span>
          ))}
        </ol>
        <p className="bg-[#ECECEC] p-2">{dic.payment[index]}</p>
        <ol className="space-x-2 p-2">
          {Payments.map((r, i) => (
            <span className={cn(Paymentscolors[i])} key={i}>
              {i + 1} .{r}
            </span>
          ))}
        </ol>
        {index == 0 && (
          <ol className="p-2 text-justify space-y-2">
            <li>
              “Recommended outstanding amount” represents the highest amount
              that we can recommend for a transaction to purchase goods or
              services from a supplier, with a payment term of 90 days. This
              assessment is based on the assumption that the company deals with
              five suppliers simultaneously over a given period.
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
        )}
        {index == 1 && (
          <ol className="p-2 text-justify space-y-2">
            <li>
              &#34;L`&rsquo;encours conseillé&rdquo; représente la somme la plus
              élevée que nous pouvons recommander pour une transaction
              d&rsquo;achat de biens ou de services auprès d&apos;un
              fournisseur, avec un délai de paiement de 90 jours. Cette
              évaluation est fondée sur l&apos;hypothèse que l&rsquo;entreprise
              traite avec cinq fournisseurs simultanément sur une période
              donnée.
            </li>
            <li>
              Il est calculé en prenant en considération les éléments chiffrés
              de l&rsquo;entreprise, son secteur d&rsquo;activité, sa moralité
              commerciale, la conjoncture liée au Covid-19, la conjoncture
              économique du pays, le risque pays, … Nous nous engageons à
              utiliser tous les moyens disponibles sans être tenus à des
              obligations de résultat. Nous respectons le cadre légal lors de
              nos investigations, qui demeurent confidentielles. Ce rapport ne
              peut être publié, distribué ni revendu. Aucune responsabilité
              légale n’est acceptée en cas de perte éventuelle à l’égard du
              présent rapport établi à votre demande
            </li>
          </ol>
        )}
      </div>
    </div>
  );
};
