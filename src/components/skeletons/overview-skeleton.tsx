import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function OverviewSkeleton() {
    return (
        <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </>
    );
}

function SkeletonCard() {
    return (
        <Card className="border-b-4 border-b-slate-300 animate-pulse">
            <CardHeader>
                <CardTitle className="text-base bg-slate-300 h-7 rounded-md"></CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center">
                    <div className="h-12 w-12 bg-slate-300 rounded-md" />
                    <div className="grow flex justify-center">
                        <div className=" w-12 h-4 bg-slate-300 rounded-md"></div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
