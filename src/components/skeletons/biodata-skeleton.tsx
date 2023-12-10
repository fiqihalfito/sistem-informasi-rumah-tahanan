import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function BiodataSkeleton() {
    return (
        <Card className="animate-pulse">
            <CardHeader>
                <Skeleton className=" h-6 bg-slate-300" />
            </CardHeader>
            <CardContent>
                <Skeleton className="w-80 h-80 bg-muted mb-6" />

                <div className="flex flex-col gap-y-2 w-1/2">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div
                            key={index}
                            className="h-8 bg-slate-300 rounded-md"
                        ></div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
