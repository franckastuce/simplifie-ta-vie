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
        title: "Alpine",
        to: "https://www.alpinecars.fr/"
    }, {
        title: "Alston Martine",
        to: "https://www.astonmartin.com/fr/"
    },
    {
        title: "Audi",
        to: "https://www.audi.fr/fr/"
    },
    {
        title: "Bentley",
        to: "https://www.bentleymotors.com/"
    },
    {
        title: "BMW",
        to: "https://www.bmw.fr/fr/accueil.html"
    },
    {
        title: "Chevrolet",
        to: "https://www.chevrolet.fr/fr/"
    },
    {
        title: "Chrysler",
        to: "http://www.chrysler.fr/"
    },
    {
        title: "Toyota",
        to: "https://www.toyota.fr/"
    },
    {
        title: "Citroen",
        to: "https://www.citroen.fr/"
    },
    {
        title: "cupra",
        to: "https://www.cupraofficial.fr"
    },
    {
        title: "daihatsu",
        to: "http://www.daihatsu.fr/"
    },
    {
        title: "Renault",
        to: "https://www.renault.fr/"
    },
    {
        title: "Peugeot",
        to: "https://www.peugeot.fr/"
    },
    {
        title: "Nissan",
        to: "https://www.nissan.fr/"
    },
    {
        title: "Opel",
        to: "https://www.opel.fr/"
    },
    {
        title: "Tesla",
        to: "https://www.tesla.com/fr_fr"
    },
    {
        title: "Volkswagen",
        to: "https://www.volkswagen.fr/"
    },
]

const Dealer = () => {
    return (
        <div>
            <Card className="m-6 shadow-lg">
                <CardHeader>
                    <CardTitle>Concessionnaires</CardTitle>
                    <CardDescription>Concessionnaires connus.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                        {components.map((component) => (
                            <Link className="shadow-lg w-full h-full" to={component.to} target="blanck" >
                                <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                    <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.01L7.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M17 16.01L17.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 12H21V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M21 8V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M7 8L17 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 20H8V22C8 22.5523 7.55228 23 7 23H5C4.44772 23 4 22.5523 4 22V20Z" fill="currentColor" /><path d="M16 20H20V22C20 22.5523 19.5523 23 19 23H17C16.4477 23 16 22.5523 16 22V20Z" fill="currentColor" /></svg>
                                    <p>{component.title}</p>
                                </div>
                            </Link>
                        ))}
                        {/* <Link className="shadow-lg w-full h-full" to="#https://www.dodge.com/fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Dodge</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.dsautomobiles.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>DS Automobiles</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.ferrari.com/fr-FR" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Ferrari</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.fiat.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Fiat</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.ford.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Ford</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.honda.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Honda</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.hummer.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Hummer</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.dacia.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Dacia</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="#https://daewoo-security.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Daewoo</p>
                                <p></p>
                            </div>
                        </Link>
                        
                        <Link className="shadow-lg w-full h-full" to="https://www.jeep.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Jeep</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.jaguar.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Jaguar</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.infiniti.com/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Infiniti</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.hyundai.com/fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Hyundai</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.lexus.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Lexus</p>
                                <p></p>
                            </div>
                        </Link>
                        <Link className="shadow-lg w-full h-full" to="https://www.mini.fr/" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <CreditCard className="mb-3 h-6 w-6" />
                                <p>Mini</p>
                                <p></p>
                            </div>
                        </Link> */}
                    </RadioGroup>
                </CardContent>
            </Card >
        </div>
    )
}

export default Dealer
