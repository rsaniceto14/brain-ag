import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
    return (

        <Card>
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Image alt="BrainAg" src="/3980036.png" height={16} width={50} />

                <h1>Brain Agriculture</h1>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                </Sheet>
            </CardContent>
        </Card>

    );
}

export default Header;