import InputField from "@/app/components/inputs/InputFields"
import { useReportStore } from "@/hooks/useReportStore"

export const ActivityInput=()=>{
    const {setExtreInfo,extrainfo}=useReportStore()
    return (
        <div className="col-span-12">
            <InputField
             name="nace"
             placeholder="Nace"
             setValue={setExtreInfo}
             value={extrainfo.nace}
            />
        </div>
    )
}