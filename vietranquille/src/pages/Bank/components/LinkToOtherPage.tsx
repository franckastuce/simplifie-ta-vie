import { CreditCard } from 'lucide-react'
import React from 'react'

const LinkToOtherPAge = () => {
    return (
        <>

            <div className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ">
                <CreditCard className="mb-3 h-3 w-3" />
                BNP

            </div>
        </>
    )
}

export default LinkToOtherPAge
