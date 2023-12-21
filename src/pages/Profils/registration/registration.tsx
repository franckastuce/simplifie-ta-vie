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
import { useFormik } from 'formik';
import *as Yup from 'yup';
import { useState } from "react";

const registration = () => {

    const [sing, setSing] = useState({
        mail: "",
        password: "",
        confirmPassword: "",
    });

    const validationSchema = Yup.object({
        mail: Yup.string().email().required("format e-mail"),
        password: Yup.string().required("attention non valide, recommence."),
        confirmPassword: Yup.string().required("Please confirm your password").oneOf([Yup.ref("password"), null],
            "Passwords don't match."),
    });

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: sing,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <>
            <Card className="m-6 shadow-lg w-[400px] items-center">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Inscription</CardTitle>
                        <CardDescription>L'inscription te permet d'avoir accés a une sauvegarde des pages, et des accés a toute l'application.(en V2, il y aura plus de droit). </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="mail" id="mail" placeholder="Email" onChange={handleChange}
                                value={values.mail} />
                        </div>
                    </CardFooter>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input type="password" id="password" placeholder="Mot de passe" onChange={handleChange}
                                value={values.password} />
                        </div>
                    </CardContent>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">confime le mot de passe</Label>
                            <Input type="password" id="password" placeholder="Confirmation Mot de passe" onChange={handleChange}
                                value={values.confirmPassword} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline"><a href="/Login">retour login</a></Button>
                        <Button><a href="/registration">je me créer</a></Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    )
}

export default registration
