"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"

import { NavigationMenuDemo } from "@/app/common/ui/dropdown"

import { DrawerDemo } from "../(root)/home/drawer"
import { SheetDemo } from "../(root)/home/sheet"

const Header = () => {
    const { setTheme } = useTheme()
    return (
        <>
            <section className="container" >
                <div className="flex justify-between py-[40px] ">
                    <div>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarSub>
                                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Email link</MenubarItem>
                                            <MenubarItem>Messages</MenubarItem>
                                            <MenubarItem>Notes</MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Edit</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarSub>
                                        <MenubarSubTrigger>Find</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Search the web</MenubarItem>
                                            <MenubarSeparator />
                                            <MenubarItem>Find...</MenubarItem>
                                            <MenubarItem>Find Next</MenubarItem>
                                            <MenubarItem>Find Previous</MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSeparator />
                                    <MenubarItem>Cut</MenubarItem>
                                    <MenubarItem>Copy</MenubarItem>
                                    <MenubarItem>Paste</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>View</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                                    <MenubarCheckboxItem checked>
                                        Always Show Full URLs
                                    </MenubarCheckboxItem>
                                    <MenubarSeparator />
                                    <MenubarItem inset>
                                        Reload <MenubarShortcut>⌘R</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem disabled inset>
                                        Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Profiles</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarRadioGroup value="benoit">
                                        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                                        <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                                        <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                                    </MenubarRadioGroup>
                                    <MenubarSeparator />
                                    <MenubarItem inset>Edit...</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem inset>Add Profile...</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                    <div>
                        <NavigationMenuDemo />
                    </div>
                    <div className="flex gap-[10px]">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <SheetDemo />
                        <DrawerDemo />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header