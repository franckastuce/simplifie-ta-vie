import { Link } from "react-router-dom";
import {
  CreditCard,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { RadioGroup } from "@/components/ui/radio-group";

const components: { title: string; to: string; }[] = [
  {
    title: "BNP",
    to: "https://www.mabanque.bnpparibas/",
  },
  {
    title: "Crédit agricole",
    to: "https://www.credit-agricole.fr/",
  },
  {
    title: "Société Général",
    to: "https://particuliers.sg.fr/",
  },
  {
    title: "la banque POSTALE",
    to: "https://www.labanquepostale.fr/",
  },
  {
    title: "CIC",
    to: "https://www.cic.fr/fr/index.html",
  },
  {
    title: "caisse d'épargne",
    to: "https://www.caisse-epargne.fr/",
  },
  {
    title: "crédit mutuel",
    to: "https://www.creditmutuel.fr/home/index.html",
  },
  {
    title: "LCL",
    to: "https://www.lcl.fr/",
  },
]

export function Bank() {
  // const [data, setData] = useState([]);//pour instancier le variable

  // useEffect(() => {//load de la page
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("MONGODB");//URL de mon API
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des données :", error);
  //     }
  //   };
  //   fetchData();
  // }, []);//pour être executer une seul fois
  return (
    <Card className="m-6 shadow-lg">
      <CardHeader>
        <CardTitle>Banques</CardTitle>
        <CardDescription>Liste des banques</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
          {components.map((component) => (
            <Link className="shadow-lg w-full h-full" to={component.to} target="blank">
              <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                <svg fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5L12 4L21 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M5 20H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 9L14 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M6 17L6 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 17L10 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M14 17L14 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 17L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <p>{component.title}</p>

              </div>
            </Link>
          ))}
        </RadioGroup>
      </CardContent>
    </Card >
  );
}
