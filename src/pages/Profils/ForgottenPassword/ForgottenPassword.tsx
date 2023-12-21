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
const ForgottenPassword = () => {
    return (
        <>
            <Card className="m-6 shadow-lg w-[400px] items-center" onSubmit={(e) => HandelSubmit(e)}>
                <form>
                    <CardHeader>
                        <CardTitle>Mot de Passe perdu</CardTitle>
                        <CardDescription>c'est Ballo, allez va y change</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="email" id="email" placeholder="e-mail" onChange={(e) => HandelChange(e)} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">Nouveau mot de passe</Label>
                            <Input type="password" id="password" placeholder="New MDP" onChange={(e) => HandelChange(e)} />
                        </div>
                    </CardFooter>
                    <CardFooter>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">Confirme</Label>
                            <Input type="password" id="password" placeholder="Confirme MDP" onChange={(e) => HandelChange(e)} />
                        </div>
                    </CardFooter>
                    <CardFooter className="flex justify-between">
                        <Button className="hover:border-red-200" variant="outline" type="reset">recommencer</Button>
                        <Button type="submit">changement</Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    )
}

export default ForgottenPassword


// import React, { useState } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     // logique de validation de sécurité ici
//     const hasUpperCase = /[A-Z]/.test(value);
//     const hasLowerCase = /[a-z]/.test(value);
//     const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/.test(value);

//     if (value.length < 12) {
//       setErrorMessage('Le mot de passe doit contenir au moins 12 caractères.');
//     } else if (!hasUpperCase || !hasLowerCase) {
//       setErrorMessage('Le mot de passe doit contenir au moins une lettre majuscule et une lettre minuscule.');
//     } else if (!hasSpecialChar) {
//       setErrorMessage('Le mot de passe doit contenir au moins un caractère spécial.');
//     } else {
//       setErrorMessage('');
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="passwordInput">Mot de passe :</label>
//       <input
//         type="password"
//         id="passwordInput"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </div>
//   );
// }

// export default App;