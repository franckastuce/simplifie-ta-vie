import {
    CreditCard,
} from "lucide-react";

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
        title: "ENGIE",
        to: "https://particuliers.engie.fr/"
    },
    {
        title: "EDF",
        to: "https://particulier.edf.fr/fr/accueil/"
    },
    {
        title: "Mega Energie",
        to: "https://www.mega-energie.fr/"
    },
    {
        title: "Vattenfall",
        to: "https://www.vattenfall.fr/"
    },
    {
        title: "ENI",
        to: "https://fr.eni.com/particuliers"
    },
    {
        title: "Alpiq",
        to: "https://particuliers.alpiq.fr/"
    },
    {
        title: "eKWatteur",
        to: "https://ekwateur.fr/"
    },
    {
        title: "Ohm Energie",
        to: "https://ohm-energie.com/"
    },
    {
        title: "Mint Energie",
        to: "https://www.mint-energie.com/"
    },
]

export function Elec() {
    return (
        <Card className="m-6 shadow-lg">
            <CardHeader>
                <CardTitle>Electricité</CardTitle>
                <CardDescription>fournisseur d'éléctricité</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                    {components.map((component) => (
                        <Link className="shadow-lg w-full h-full" to={component.to} target="blank">
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9V19C6 20.1046 6.89543 21 8 21H17C18.1046 21 19 20.1046 19 19V14" stroke="currentColor" stroke-linecap="round" /><path d="M9 5.6V7C9 8.10457 8.10457 9 7 9H5C3.89543 9 3 8.10457 3 7V5.6C3 5.26863 3.26863 5 3.6 5H8.4C8.73137 5 9 5.26863 9 5.6Z" stroke="currentColor" stroke-linecap="round" /><path d="M4 5V3" stroke="currentColor" stroke-linecap="round" /><path d="M8 5V3" stroke="currentColor" stroke-linecap="round" /><path d="M18.1667 4L16.5 7H20.5L18.8333 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                <p>{component.title}</p>
                            </div>
                        </Link>
                    ))}

                </RadioGroup>
            </CardContent>
        </Card >
    );
}
