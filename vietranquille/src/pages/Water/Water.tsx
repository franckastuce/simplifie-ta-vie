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
        title: "SAUR",
        to: "https://www.saurclient.fr/"
    },
    {
        title: "VEOLA",
        to: "https://www.veolia.fr/"
    },
    {
        title: "SUEZ",
        to: "https://www.toutsurmoneau.fr/"
    },
    {
        title: "Eau du grand LYON",
        to: "https://www.eaudugrandlyon.com/"
    },
    {
        title: "EAU DE MARSEILLE",
        to: "https://www.eauxdemarseille.fr/"
    },
    {
        title: "Eau de Paris",
        to: "https://www.eaudeparis.fr/"
    },
    {
        title: "Eau du bassins Rennais",
        to: "https://www.eaudubassinrennais.fr/"
    },
    {
        title: "Eau d'Azur",
        to: "https://eaudazur.com/"
    },
]

export function Water() {
    return (
        <Card className="m-6 shadow-lg">
            <CardHeader>
                <CardTitle>EAU</CardTitle>
                <CardDescription>fournisseur d'eau</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                    {components.map((component) => (
                        <Link className="shadow-lg w-full h-full" to={component.to} target="blank">
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ripple" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0"></path>
                                    <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0"></path>
                                    <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"></path>
                                </svg>
                                <p>{component.title}</p>

                            </div>
                        </Link>
                    ))}

                </RadioGroup>
            </CardContent>
        </Card >
    );
}
