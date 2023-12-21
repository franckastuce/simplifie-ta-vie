import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { RadioGroup, } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const HandelSubmit = (e) => {
    e.preventDefault()
    console.log("submit");

}
const HandelChange = (e) => {
    console.log(e.target.value);

}

const Add = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row">
                <Card className="m-6 shadow-lg">
                    <CardHeader>
                        <CardTitle>Ajouter un document</CardTitle>
                        <CardDescription>tous les type de documents fait et terminer peuvent être mise dans cette rebrique</CardDescription>
                    </CardHeader>
                    <Link to="/Recover"><Button type="button">retour sauvegarde</Button></Link>
                    <Link to="/Doc"><Button type="button">direction tous les doc ajouter</Button></Link>
                    <CardContent className="grid gap-6">
                        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">

                            <Card className="m-6 shadow-lg w-[400px] items-center" onSubmit={(e) => HandelSubmit(e)}>
                                <form >
                                    <CardHeader>
                                        <CardTitle>A la main</CardTitle>
                                        <CardDescription>Je pense qu'il faudra quand même un document avec signature de l'entrepreneur. </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="text">Nom Entreprise</Label>
                                            <Input type="text" id="text" placeholder="ex: menuiserie du surd" onChange={(e) => HandelChange(e)} />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="email">Email</Label>
                                            <Input type="email" id="email" placeholder="Email" onChange={(e) => HandelChange(e)} />
                                        </div>
                                    </CardFooter>
                                    <CardContent>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="text">Téléphone</Label>
                                            <Input type="text" id="text" placeholder="07 25 XX XX" onChange={(e) => HandelChange(e)} />
                                        </div>
                                    </CardContent>
                                    <CardContent>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="text">Adresse</Label>
                                            <Input type="text" id="text" placeholder="594 rue de l'App" onChange={(e) => HandelChange(e)} />
                                        </div>
                                    </CardContent>
                                    <CardContent>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="text">mettre un txtarea explication des travaux, j'ai pas réussis</Label>
                                            <Input type="text" id="text" placeholder="txtarea" onChange={(e) => HandelChange(e)} />
                                        </div>
                                    </CardContent>
                                    <CardContent>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="text">prix</Label>
                                            <Input type="text" id="text" placeholder="Montant des travaux" onChange={(e) => HandelChange(e)} />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button className="hover:border-red-200" variant="outline" type="reset">supprimer</Button>
                                        <Button type="submit">Valider</Button>
                                    </CardFooter>
                                </form>
                            </Card>

                            <Card className="m-6 shadow-lg w-[400px] items-center" onSubmit={(e) => HandelSubmit(e)}>
                                <form >
                                    <CardHeader>
                                        <CardTitle>Drague and drop</CardTitle>
                                        <CardDescription>faite glisser le document dedans ou va le chercher. </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="picture">documents</Label>
                                            <Input id="picture" type="file" />
                                        </div></CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button className="hover:border-red-200" variant="outline" type="reset">supprimer</Button>
                                        <Button type="submit">Valider</Button>
                                    </CardFooter>
                                </form>
                            </Card>

                        </RadioGroup>
                    </CardContent>
                </Card >

            </div>
        </>
    )
}

export default Add
