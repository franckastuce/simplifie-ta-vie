import { Link } from "react-router-dom";
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


export function Recover() {
    return (
        <Card className="m-6 shadow-lg">
            <CardHeader>
                <CardTitle>Accés Rapide</CardTitle>
                <CardDescription>Récapitulatif des derniers liens utiliser pour vous faire un accés rapide.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">

                    <Link className="shadow-lg w-full h-full" to="/Add" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>Enregistrer un document de travail</p>
                            <p>entreprises</p>
                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="/banques" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>Banques</p>
                            <p>BNP</p>
                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>Assurances</p>
                            <p>AXA</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>Maison</p>
                            <p>entreprises</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>Santé</p>
                            <p>Améli</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>Eau</p>
                            <p>Véolia</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>Elec</p>
                            <p>ENGIE</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>voiture</p>
                            <p>Garage</p>
                            <p>norauto</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>voiture</p>
                            <p>concessionaire</p>
                            <p>tesla</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>profil</p>
                            <p>mise a jour</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            Profil

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>Santé</p>
                            <p>Véterinaire</p>
                            <p>nom du veterinaire</p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>sauvegarde papier</p>

                        </div>
                    </Link>



                </RadioGroup>
            </CardContent>
        </Card >
    );
}
