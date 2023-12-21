import { CreditCard } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { RadioGroup } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";

const components: { title: string; to: string }[] = [
    {
        title: "GMF",
        to: "https://www.gmf.fr/"
    },
    {
        title: "AXA",
        to: "https://www.axa.fr/"
    },
    {
        title: "CNP",
        to: "https://www.cnp.fr/particuliers"
    },
    {
        title: "generalis",
        to: "https://www.generali.fr/"
    },
    {
        title: "allianz",
        to: "https://www.allianz.fr/"
    },
    {
        title: "RC-Pro",
        to: "https://www.orus.eu/assurances-professionnelles/rc-pro-auto-entrepreneur?utm_term=rc%20pro%20auto-entrepreneur&utm_campaign=RCproStatutAutoEntrepreneur&utm_source=adwords&utm_medium=ppc&hsa_acc=2091176825&hsa_cam=20129629430&hsa_grp=rcproautoentrepreneur&hsa_ad=652243150756&hsa_src=g&hsa_tgt=kwd-1170984460479&hsa_kw=rc%20pro%20auto-entrepreneur&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_kT5a3ujCqSlcVtM51BoK1OnLP0D-A2-VZscGQlet_JTkGnZAgfh98aAiT3EALw_wcB"
    },
    {
        title: "groupama",
        to: "https://www.groupama.fr/"
    },
    {
        title: "malakoff",
        to: "https://www.malakoffhumanis.com/"
    },
    {
        title: "Swiss Life",
        to: "https://www.swisslife.fr/home.html"
    },
    {
        title: "Macif",
        to: "https://www.macif.fr/"
    },
    {
        title: "Aviva",
        to: "https://www.abeille-assurances.fr/"
    },
    {
        title: "Pro btp",
        to: "https://www.probtp.com/particuliers-accueil.html"
    },
    {
        title: "Apicil",
        to: "https://particulier.apicil.com/"
    },

]

export function Insurences() {
    return (
        <Card className="m-6 shadow-lg">
            <CardHeader>
                <CardTitle>Assurances</CardTitle>
                <CardDescription>Liste des Assurances</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                    {components.map((component) => (
                        <Link className="shadow-lg w-full h-full" to={component.to} target="blank">
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 16.01L12.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 9.5L12 4L21 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                <p>{component.title}</p>

                            </div>
                        </Link>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}
