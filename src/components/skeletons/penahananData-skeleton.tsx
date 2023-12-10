import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "../ui/card";
import DividerX from "../ui/divider-x";
import { Skeleton } from "../ui/skeleton";

export default function PenahananDataSkeleton() {
    return (
        <Card className="grow animate-pulse">
            <CardHeader>
                {/* <CardTitle>Data Penahanan</CardTitle> */}
                <Skeleton className="h-6 w-40 bg-slate-300 " />
            </CardHeader>
            <CardContent>
                <div className="text-sm">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="space-y-6">
                            {Array.from({ length: 3 }, (_, index) => (
                                <Skeleton
                                    key={index}
                                    className="h-11 w-1/2 bg-slate-300"
                                ></Skeleton>
                            ))}
                        </div>

                        <div className="space-y-6">
                            {Array.from({ length: 3 }, (_, index) => (
                                <Skeleton
                                    key={index}
                                    className="h-11 w-1/2 bg-slate-300"
                                ></Skeleton>
                            ))}
                        </div>
                    </div>
                    <DividerX className="my-8" />
                    <div className="space-y-6">
                        {/* keterangan loading */}
                        <Skeleton className="h-11 w-40 bg-slate-300" />
                        {/* pasal loading */}
                        <Skeleton className="h-20 bg-slate-300" />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Skeleton className="h-6 w-36 bg-slate-300" />
            </CardFooter>
        </Card>
    );
}
