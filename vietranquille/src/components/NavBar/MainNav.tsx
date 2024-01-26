"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Accueil",
    href: "/Accueil",
    description:
      "Eventail des accès direct.",
  },
  {
    title: "Banques",
    href: "/Banks",
    description:
      "Pour une connexion direct aux banques",
  },
  {
    title: "Assurances",
    href: "/Insurences",
    description:
      "Les assurances avec votre contrat.",
  },
  {
    title: "Santé",
    href: "/Health",
    description:
      "La santé c'est important retrouver votre Mutuel"/*et votre medecin."*/,
  },
  {
    title: "Eau",
    href: "/Water",
    description: "Le fournisseur d'eau chez lequel vous êtes",
  },
  {
    title: "Eléctricité",
    href: "/Elec",
    description:
      "Le fournisseur d'électriciter chez lequel vous êtes",
  },/*
  {
    title: "Maison",
    href: "#",
    description:
      "Cette pages vous permettra de trouver des artisant prés de chez pour d'éventuel travaus a faire dans la maison.",
  },*/
  {
    title: "Voitures",
    href: "/Carr",
    description:
      "Cette pages vous permettra de trouver des artisant prés de chez pour d'éventuel travaus a faire dans la maison.",
  },
  {
    title: "Concessionnaires",
    href: "/Dealer",
    description:
      "Cette pages vous permettra de trouver la voiture qui te va.",
  },
  {
    title: "Impôts",
    href: "/Taxes",
    description:
      "Le site des impôts pour faire affiner ou emvoyer les impôts.",
  },/*
  {
    title: "Profil",
    href: "/Profil",
    description:
      "Inscrit toi, profite, et montre cette App a tous tes potes qui ferons pareil.",
  },
  {
    title: "Vétérinaire",
    href: "/Health",
    description:
      "la santé des animaux est primordial.",
  },
  {
    title: "Sauvegarde",
    href: "/Recover",
    description:
      "Vos papier sauvegarder après scan, pour calcule rapide de vos dépences, et éventuelement en version démat pour vos impôts",
  },*/
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>

          <NavigationMenuTrigger><Avatar>
            <AvatarImage src="../public/imgSL.png" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>Commencer</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Déscriptif
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      SimpleLife vous permettra de vous simplifier la vie, sur les différentes recherches du quotidien, la version 2 sera complétée, c'est un system par cartes qui recences (pour la Frances) les différents distributeurs des services du quotidiens, et autre entrepreneur de votre région, avec la géolocalisation.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/Accueil" title="Déscriptif et fonctionement">
                Application qui vous simplifie la vie, sur les différentes recherche du quotidiens.
              </ListItem>
              <ListItem href="#" title="Profil">
                Les données qu'il y aura sur votre profil sont étudié pour que vous n'ayer pas à remplir les informations des sites qui vous les demanderais dans la version 2.
              </ListItem>
              <ListItem href="/Accueil" title="Accueil">
                Page d'accueil ou toutes les pages sont listés et accéssible , avec une prévisualisation de la version 2.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>listes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuItem className="">
            <Link to="/Accueil">
              Accueil
            </Link>
          </NavigationMenuItem>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MainNav