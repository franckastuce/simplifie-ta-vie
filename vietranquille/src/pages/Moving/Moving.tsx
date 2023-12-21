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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function Moving() {
    return (
        <Card className="m-6 shadow-lg">
            <CardHeader>
                <CardTitle>Déménagement</CardTitle>
                <CardDescription><p>partir de ou, et aller ou, en passant par qui ???</p><p>Il vaut ieux le déménageur qui est a l'arrivée ou celui du départ ???</p></CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">

                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>départ</p>
                            <p></p>

                        </div>
                    </Link>
                    <Link className="shadow-lg w-full h-full" to="#" >
                        <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                            <CreditCard className="mb-3 h-6 w-6" />
                            <p>arrivée</p>
                            <p></p>

                        </div>
                    </Link>
                </RadioGroup>
            </CardContent>
            <CardContent>
                <div className="grid w-screen max-w-sm items-center gap-1.5">
                    <Label htmlFor="text">départ</Label>
                    <Input type="text" id="text" placeholder="départ" />
                </div>
            </CardContent>
            <CardContent>
                <div className="grid w-screen max-w-sm items-center gap-1.5">
                    <Label htmlFor="text">arrivé</Label>
                    <Input type="text" id="text" placeholder="arrivé" />
                </div>
            </CardContent>
        </Card >
    );
}
