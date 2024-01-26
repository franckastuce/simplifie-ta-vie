import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
    CreditCard,
    Wallet,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function Housse() {
    return (
        <Card className="m-6 shadow-lg">
            <CardHeader>
                <CardTitle>Maison</CardTitle>
                <CardDescription>tout ce que l'on trouve dans une maison</CardDescription>
                <CardDescription className="text-red-300">En cour de construction</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">

                    <div className="shadow-lg">
                        <a href="https://mabanque.bnpparibas/">
                            <RadioGroupItem
                                value="Societe general"
                                id="card"
                                className="peer sr-only"
                            />
                            <Label
                                htmlFor="card"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <CreditCard className="mb-3 h-6 w-6" />
                                maçon
                            </Label>
                        </a>
                    </div>

                    <div className="shadow-lg">
                        <RadioGroupItem
                            value="paypal"
                            id="paypal"
                            className="peer sr-only"
                        />
                        <Label
                            htmlFor="paypal"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <Wallet className="mb-3 h-6 w-6" />
                            menuiserie
                        </Label>
                    </div>
                    <div className="shadow-lg">
                        <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                        <Label
                            htmlFor="apple"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <CreditCard className="mb-3 h-6 w-6" />
                            peintre
                        </Label>
                    </div>
                    <div className="shadow-lg">
                        <RadioGroupItem value="apple1" id="apple1" className="peer sr-only" />
                        <Label
                            htmlFor="apple1"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <CreditCard className="mb-3 h-6 w-6" />
                            toiture
                        </Label>
                    </div>
                    <div className="shadow-lg">
                        <RadioGroupItem value="apple2" id="apple2" className="peer sr-only" />
                        <Label
                            htmlFor="apple2"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <CreditCard className="mb-3 h-6 w-6" />
                            jardin
                        </Label>
                    </div>
                    <div className="shadow-lg">
                        <RadioGroupItem value="apple3" id="apple3" className="peer sr-only" />
                        <Label
                            htmlFor="apple3"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <CreditCard className="mb-3 h-6 w-6" />
                            chaud - froid
                        </Label>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card >
    );
}
