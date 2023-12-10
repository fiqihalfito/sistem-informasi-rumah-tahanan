"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { agama } from "@/lib/constants/agama";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { jenisKelamin } from "@/lib/constants/jenis-kelamin";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useFormState } from "react-dom";
import { createTahanan } from "@/actions/tahanan-action";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FormTambah() {
    const initialState = {
        message: null,
        errors: {},
    };
    const [state, formAction] = useFormState(createTahanan, initialState);

    return (
        <Card className=" ">
            <CardHeader>
                <CardTitle>Tambah Tahanan</CardTitle>
                <CardDescription>Biodata</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={formAction} className="space-y-4">
                    <FormItemWrapper>
                        <Label
                            htmlFor="nama"
                            className={cn({
                                "text-red-600": state.errors?.nama,
                            })}
                        >
                            Nama
                        </Label>
                        <Input
                            type="text"
                            id="nama"
                            placeholder="nama ..."
                            name="nama"
                        />
                        <ErrorState>{state.errors?.nama}</ErrorState>
                    </FormItemWrapper>
                    <FormItemWrapper>
                        <Label htmlFor="tempat_lahir">Tempat lahir</Label>
                        <Input
                            type="text"
                            id="tempat_lahir"
                            placeholder="Tempat lahir ..."
                            name="tempat_lahir"
                        />
                    </FormItemWrapper>
                    <FormItemWrapper>
                        <Label htmlFor="tanggal_lahir">Tanggal lahir</Label>
                        <Input
                            type="date"
                            id="tanggal_lahir"
                            placeholder="tanggal lahir ..."
                            name="tanggal_lahir"
                        />
                    </FormItemWrapper>
                    <FormItemWrapper>
                        <Label htmlFor="jenis_kelamin">Jenis kelamin</Label>
                        <RadioGroup
                            name="jenis_kelamin"
                            defaultValue="Laki-laki"
                            className="p-3 bg-white rounded-md border w-fit"
                        >
                            {jenisKelamin.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center space-x-2"
                                >
                                    <RadioGroupItem value={item} id={item} />
                                    <Label htmlFor={item}>{item}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </FormItemWrapper>
                    <FormItemWrapper>
                        <Label htmlFor="pekerjaan">Pekerjaan</Label>
                        <Input
                            type="text"
                            id="pekerjaan"
                            placeholder="pekerjaan ..."
                            name="pekerjaan"
                        />
                    </FormItemWrapper>
                    <FormItemWrapper>
                        <Label
                            htmlFor="agama"
                            className={cn({
                                "text-red-600": state.errors?.agama,
                            })}
                        >
                            Agama
                        </Label>
                        <Select name="agama">
                            <SelectTrigger id="agama" className="w-full">
                                <SelectValue placeholder="pilih agama ..." />
                            </SelectTrigger>
                            <SelectContent>
                                {agama.map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <ErrorState>{state.errors?.agama}</ErrorState>
                    </FormItemWrapper>
                    <FormItemWrapper>
                        <Label htmlFor="alamat">Alamat</Label>
                        <Textarea
                            placeholder="alamat"
                            id="alamat"
                            name="alamat"
                        />
                    </FormItemWrapper>
                    <Button type="submit">Submit</Button>
                </form>
            </CardContent>
            {/* <CardFooter></CardFooter> */}
        </Card>
    );
}

function FormItemWrapper({ children }: { children: React.ReactNode }) {
    return <div className="space-y-1">{children}</div>;
}

function ErrorState({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-red-600 text-sm font-semibold flex items-center gap-x-1">
            {children && <AlertTriangleIcon size={18} />}
            {children}
        </p>
    );
}
