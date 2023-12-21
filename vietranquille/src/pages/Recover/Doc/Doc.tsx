import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const docs: { select: string; card: string; entreprise: string; email: string; phone: number; adress: string; descriptif: string; prix: number }[] = [
    {
        select: "",
        card: "",
        entreprise: "",
        email: "",
        phone: "",
        adress: "",
        descriptif: "",
        prix: ""
    },
]

const Doc = () => {
    return (
        <>
            en cour de construction
            <Link to="/Recover"><Button type="button">retour sauvegarde</Button></Link>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">regarde tes dépences!</h2>
                        <p className="text-muted-foreground">
                            Voici une liste des dépences par années!
                        </p>
                    </div>
                </div>
                <div className="w-screen flex items-center space-x-2 ">
                    <p className="space-x-2">sélection (case a cocher)</p>
                    <p className="space-x-2">carte (elec)</p>
                    <p className="space-x-2">Nom entreprise</p>
                    <p className="space-x-2">Email</p>
                    <p className="space-x-2">télephone</p>
                    <p className="space-x-2">adresse</p>
                    <p className="space-x-2">déscriptif</p>
                    <p className="space-x-2">prix</p>
                    <Button type="button">détail</Button>
                    <Button type="reset">suprimer</Button>
                    {/* <UserNav /> */}
                </div>
                {/* <DataTable data={tasks} columns={columns} /> */}
            </div>
        </>
    )
}

export default Doc
