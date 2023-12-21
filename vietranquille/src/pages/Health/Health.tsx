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

const components: { title: string; p: string; to: string }[] = [
    {
        title: "AMELI",
        p: "",
        to: "https://www.ameli.fr/assure"
    },
    {
        title: "généraliste",
        p: "",
        to: ""
    },
    {
        title: "CHU",
        p: "",
        to: ""
    },
    {
        title: "Dents",
        p: "spécialiste",
        to: ""
    },
    {
        title: "pieds",
        p: "spécialiste",
        to: ""
    },
    {
        title: "Yeux",
        p: "spécialiste",
        to: ""
    },
    {
        title: "Oreil",
        p: "spécialiste",
        to: ""
    },
]
const animaux: { title: string; p: string; to: string }[] = [
    {
        title: "Vétérinaire",
        p: "",
        to: ""
    },
    {
        title: "SPA",
        p: "pour une adoption",
        to: "https://www.la-spa.fr/"
    },
    {
        title: "Animalis",
        p: "exemple",
        to: ""
    },
]

export function Health() {
    return (
        <>
            <div className="flex flex-col sm:flex-row">
                <Card className="m-6 shadow-lg">
                    <CardHeader>
                        <CardTitle>SANTE</CardTitle>
                        <CardDescription>humain</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                            {components.map((component) => (
                                <Link className="shadow-lg w-full h-full" to={component.to} target="blank" >
                                    <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                        <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.9 18H10.1C9.76863 18 9.5 17.7314 9.5 17.4V15.1C9.5 14.7686 9.23137 14.5 8.9 14.5H6.6C6.26863 14.5 6 14.2314 6 13.9V10.1C6 9.76863 6.26863 9.5 6.6 9.5H8.9C9.23137 9.5 9.5 9.23137 9.5 8.9V6.6C9.5 6.26863 9.76863 6 10.1 6H13.9C14.2314 6 14.5 6.26863 14.5 6.6V8.9C14.5 9.23137 14.7686 9.5 15.1 9.5H17.4C17.7314 9.5 18 9.76863 18 10.1V13.9C18 14.2314 17.7314 14.5 17.4 14.5H15.1C14.7686 14.5 14.5 14.7686 14.5 15.1V17.4C14.5 17.7314 14.2314 18 13.9 18Z" stroke="currentColor" stroke-width="1.5" /><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        <p>{component.p}</p>
                                        <p>{component.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </RadioGroup>
                    </CardContent>
                </Card >
                <Card className="m-6 shadow-lg">
                    <CardHeader>
                        <CardTitle>SANTE</CardTitle>
                        <CardDescription>animaux</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                            {animaux.map((animal) => (
                                <Link className="shadow-lg w-full h-full" to={animal.to} target="blank">
                                    <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                        <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        <p>{animal.title}</p>
                                        <p>{animal.p}</p>
                                    </div>
                                </Link>))}
                        </RadioGroup>
                    </CardContent>
                </Card >
            </div>
        </>
    );
}
