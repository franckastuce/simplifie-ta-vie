import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const HandelSubmit = (e) => {
    e.preventDefault()
    console.log("submit");

}
const HandelChange = (e) => {
    console.log(e.target.value);

}
const Login = () => {
    return (
        <>
            <Card className="m-6 shadow-lg w-[400px] items-center" onSubmit={(e) => HandelSubmit(e)}>
                <form >
                    <CardHeader>
                        <CardTitle>Connecte Toi</CardTitle>
                        <CardDescription>Accéde a tes données en te créant.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Nom</Label>
                                <Input id="name" placeholder="Nom" onChange={(e) => HandelChange(e)} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input id="password" placeholder="password" onChange={(e) => HandelChange(e)} />
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline"><a href="/registration">creer un compte</a></Button>
                        <Button type="submit">ouverture</Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    )
}

export default Login
