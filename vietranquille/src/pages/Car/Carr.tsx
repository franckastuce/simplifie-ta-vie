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

export function Carr() {
    return (
        <div className="flex">
            <Card className="m-6 shadow-lg">
                <CardHeader>
                    <CardTitle>Garages</CardTitle>
                    <CardDescription>Garages connus ou prés de chez toi.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">

                        <Link className="shadow-lg w-full h-full" to="#" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16C8.10457 16 9 15.1046 9 14C9 12.8954 8.10457 12 7 12C5.89543 12 5 12.8954 5 14C5 15.1046 5.89543 16 7 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" /><path d="M17 16C18.1046 16 19 15.1046 19 14C19 12.8954 18.1046 12 17 12C15.8954 12 15 12.8954 15 14C15 15.1046 15.8954 16 17 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" /><path d="M14 14V3.6C14 3.26863 13.7314 3 13.4 3H2.6C2.26863 3 2 3.26863 2 3.6V13.4C2 13.7314 2.26863 14 2.6 14H4.65" stroke="currentColor" stroke-linecap="round" /><path d="M14 14H9.05005" stroke="currentColor" stroke-linecap="round" /><path d="M14 6H19.6101C19.8472 6 20.0621 6.13964 20.1584 6.35632L21.9483 10.3836C21.9824 10.4604 22 10.5434 22 10.6273V13.4C22 13.7314 21.7314 14 21.4 14H19.5" stroke="currentColor" stroke-linecap="round" /><path d="M14 14H15" stroke="currentColor" stroke-linecap="round" /><path d="M3 20H20.75M3 20L4.75 21.75M3 20L4.75 18.25M20.75 20L19 21.75M20.75 20L19 18.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                <p>Garage</p>
                                <p>norauto</p>
                            </div>
                        </Link>

                        <Link className="shadow-lg w-full h-full" to="#" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16C8.10457 16 9 15.1046 9 14C9 12.8954 8.10457 12 7 12C5.89543 12 5 12.8954 5 14C5 15.1046 5.89543 16 7 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" /><path d="M17 16C18.1046 16 19 15.1046 19 14C19 12.8954 18.1046 12 17 12C15.8954 12 15 12.8954 15 14C15 15.1046 15.8954 16 17 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" /><path d="M14 14V3.6C14 3.26863 13.7314 3 13.4 3H2.6C2.26863 3 2 3.26863 2 3.6V13.4C2 13.7314 2.26863 14 2.6 14H4.65" stroke="currentColor" stroke-linecap="round" /><path d="M14 14H9.05005" stroke="currentColor" stroke-linecap="round" /><path d="M14 6H19.6101C19.8472 6 20.0621 6.13964 20.1584 6.35632L21.9483 10.3836C21.9824 10.4604 22 10.5434 22 10.6273V13.4C22 13.7314 21.7314 14 21.4 14H19.5" stroke="currentColor" stroke-linecap="round" /><path d="M14 14H15" stroke="currentColor" stroke-linecap="round" /><path d="M3 20H20.75M3 20L4.75 21.75M3 20L4.75 18.25M20.75 20L19 21.75M20.75 20L19 18.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                <p>Garage</p>
                                <p></p>
                            </div>
                        </Link>
                    </RadioGroup>
                </CardContent>
            </Card >

            <Card className="m-6 shadow-lg">
                <CardHeader>
                    <CardTitle>Contôle technique</CardTitle>
                    <CardDescription>En cour de construction</CardDescription>
                    <CardDescription>CT prés de chez toi, quand c'est ton prochain CT?</CardDescription>
                </CardHeader>
                {/*<CardContent className="grid gap-6">
                    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">

                        <Link className="shadow-lg w-full h-full" to="#" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 19C9.10457 19 10 18.1046 10 17C10 15.8954 9.10457 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" /><path d="M18 19C19.1046 19 20 18.1046 20 17C20 15.8954 19.1046 15 18 15C16.8954 15 16 15.8954 16 17C16 18.1046 16.8954 19 18 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" /><path d="M10.05 17H15V6.6C15 6.26863 14.7314 6 14.4 6H1" stroke="currentColor" stroke-linecap="round" /><path d="M5.65 17H3.6C3.26863 17 3 16.7314 3 16.4V11.5" stroke="currentColor" stroke-linecap="round" /><path d="M2 9L6 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M15 9H20.6101C20.8472 9 21.0621 9.13964 21.1584 9.35632L22.9483 13.3836C22.9824 13.4604 23 13.5434 23 13.6273V16.4C23 16.7314 22.7314 17 22.4 17H20.5" stroke="currentColor" stroke-linecap="round" /><path d="M15 17H16" stroke="currentColor" stroke-linecap="round" /></svg>
                                <p>Contole technique</p>
                                <p>garage du CT</p>
                            </div>
                        </Link>

                        <Link className="shadow-lg w-full h-full" to="#" >
                            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                                <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 19C9.10457 19 10 18.1046 10 17C10 15.8954 9.10457 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" /><path d="M18 19C19.1046 19 20 18.1046 20 17C20 15.8954 19.1046 15 18 15C16.8954 15 16 15.8954 16 17C16 18.1046 16.8954 19 18 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" /><path d="M10.05 17H15V6.6C15 6.26863 14.7314 6 14.4 6H1" stroke="currentColor" stroke-linecap="round" /><path d="M5.65 17H3.6C3.26863 17 3 16.7314 3 16.4V11.5" stroke="currentColor" stroke-linecap="round" /><path d="M2 9L6 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M15 9H20.6101C20.8472 9 21.0621 9.13964 21.1584 9.35632L22.9483 13.3836C22.9824 13.4604 23 13.5434 23 13.6273V16.4C23 16.7314 22.7314 17 22.4 17H20.5" stroke="currentColor" stroke-linecap="round" /><path d="M15 17H16" stroke="currentColor" stroke-linecap="round" /></svg>
                                <p>Contole technique</p>
                                <p>garage du CT</p>
                            </div>
                        </Link>
                    </RadioGroup>
    </CardContent>*/}
            </Card >
        </div>
    );
}
