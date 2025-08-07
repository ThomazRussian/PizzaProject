import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button"
import { ChevronDown, LogOut , Building } from "lucide-react";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";



export function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    Pizza Shop
                    <ChevronDown className="w-4 h-4"></ChevronDown>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>
                        Thomaz Russian Aguiar
                    </span>
                    <span className="text-xs font-normal text-muted-foreground">
                        thomazrussian@gmail.com
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Building className="w-4 h-4 mr-2" />
                    <span>
                        Perfil da loja
                    </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>
                        Sair
                    </span>
                    </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}