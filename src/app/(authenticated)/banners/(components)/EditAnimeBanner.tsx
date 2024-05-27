"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";


export function EditAnimeBanner() {

    const [searchKey, setSearchKey] = useState("");


    return (
        <>
            <div className="relative min-h-[1032px]">
                <div className="grid-cols-1 grid gap-4 mb-6">
                    <h1 className="font-semibold text-xl">Chỉnh sửa banner</h1>
                    <div className="flex flex-col gap-3 w-full rounded bg-white p-4">
                        <div className="flex flex-col gap-3 w-full">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <Label className="font-bold text-sm">
                                    Danh sách phim anime
                                    <span className="text-red-500">*</span>
                                </Label>
                                <div className="flex flex-row items-center">
                                    <Input
                                        className="h-[52px] w-full md:w-[270px] bg-white"
                                        variant="bordered"
                                        radius="sm"
                                        label={`Nhập tên anime ...`}
                                        onChange={(e) => setSearchKey(e.target.value)}
                                    />
                                    <Button
                                        className="h-[40px] w-fit rounded-md m-0 p-0 -ml-[60px] min-w-unit-12 bg-transparent z-10 hover:bg-transparent"
                                    >
                                        <MagnifyingGlassIcon className={`h-6 w-6 text-[#3BE1AA]`} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}