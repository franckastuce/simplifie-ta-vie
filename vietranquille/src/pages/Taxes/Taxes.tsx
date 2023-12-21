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


import { RadioGroup, } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";

const components: { title: string; to: string }[] = [
    {
        title: "IMPÔT",
        to: "https://www.impots.gouv.fr/accueil"
    }
]

export function Taxes() {
    return (
        <Card className="m-6 shadow-lg">
            <CardHeader>
                <CardTitle>IMPOTS</CardTitle>
                <CardDescription>tous les impots, assurez-vous d'avoir les sécuriter necessaires, comme le cadenat dans le barre du navigateur</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                    {components.map((component) => (
                        <Link className="shadow-lg w-full h-full" to={component.to} target="blank">
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>{component.title}</p>

                            </div>
                        </Link>
                    ))}
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary text-gray-300 hover:text-gray-300">
                            <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 12H21M21 12L17.16 8M21 12L17.16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M11 7.50265C10.3565 7.18066 9.63357 7 8.86957 7C6.18018 7 4 9.23858 4 12C4 14.7614 6.18018 17 8.86957 17C9.63357 17 10.3565 16.8193 11 16.4974" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 11H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 13H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            <p className="text-gray-300">déductions</p>
                            <p className="text-gray-300">en cour de construction</p>
                            <p className="text-gray-300">mise en place version 2</p>

                        </div>
                    </Link>
                </RadioGroup>
            </CardContent>
        </Card >
    );
}
