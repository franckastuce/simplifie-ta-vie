import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import { useFormik } from 'formik';
import *as Yup from 'yup';

const Profil = () => {

    const [profilUser, setProfilUser] = useState({
        lastname: "",
        firstname: "",
        mail: "",
        phone: "",
        address: "",
        zipe: "",
        city: "",
    });

    const validationSchema = Yup.object({
        lastname: Yup.string(),
        firstname: Yup.string(),
        mail: Yup.string().email(),
        phone: Yup.string(),
        address: Yup.string().required("pour la géolocalisation, l'adresse est obligatoire"),
        zipe: Yup.string(),
        city: Yup.string(),
    })

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: profilUser,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <>
            <Card className="m-6 shadow-lg w-[400px] items-center" >
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Profil</CardTitle>
                        <CardDescription>Pofine ton profile, plus il y en a, moins tu auras a remplir les sites qui demande des informations. </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="text">Nom</Label>
                            <Input type="text" id="text" placeholder="nom" onChange={handleChange}
                                value={values.lastname} />

                        </div>
                    </CardContent>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="text">Prénom</Label>
                            <Input type="text" id="text" placeholder="prénom" onChange={handleChange}
                                value={values.firstname} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" onChange={handleChange}
                                value={values.mail} />
                        </div>
                    </CardFooter>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="text">Téléphone</Label>
                            <Input type="text" id="text" placeholder="07 25 XX XX" onChange={handleChange}
                                value={values.phone} />
                        </div>
                    </CardContent>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="text">Adresse</Label>
                            <Input type="text" id="text" placeholder="594 rue de l'App" onChange={handleChange}
                                value={values.address} />
                            {errors.address && <small>{errors.address}</small>}
                        </div>
                    </CardContent>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="text">Code Postal</Label>
                            <Input type="text" id="text" placeholder="25000" onChange={handleChange}
                                value={values.zipe} />
                        </div>
                    </CardContent>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="text">Ville</Label>
                            <Input type="text" id="text" placeholder="ville" onChange={handleChange}
                                value={values.city} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button className="hover:border-red-200" variant="outline" type="reset">supprimer</Button>
                        <Button type="submit">Valider</Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    )
}

export default Profil
