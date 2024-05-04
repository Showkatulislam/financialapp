import { dic } from "@/dictionaries";
import { useLanguage } from "@/hooks/UseLanguage";
export const CL = (property: keyof typeof dic) => {
    const { LAN } = useLanguage();
    return dic[property][LAN === "EN" ? 0 : 1];
};
