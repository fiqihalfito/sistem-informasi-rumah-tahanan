import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function wait(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export function convertDateToString(dateObject?: string | Date | null) {
    if (!dateObject) {
        return null;
    }

    if (typeof dateObject === "string") {
        dateObject = new Date(dateObject);
    }

    const day = String(dateObject.getUTCDate()).padStart(2, "0");
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0");
    const year = String(dateObject.getUTCFullYear());

    return `${day}-${month}-${year}`;
}

export function convertTimestampToString(timestamp?: Date | string | null) {
    if (!timestamp) return null;

    if (typeof timestamp === "string") {
        timestamp = new Date(timestamp);
    }

    const year = timestamp.getFullYear();
    const month = (timestamp.getMonth() + 1).toString().padStart(2, "0");
    const day = timestamp.getDate().toString().padStart(2, "0");
    const hours = timestamp.getHours().toString().padStart(2, "0");
    const minutes = timestamp.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day} | ${hours}:${minutes}`;
}

export function convertDateToInputType(postgresDate: Date | string | null) {
    if (!postgresDate) {
        return null;
    }

    if (typeof postgresDate === "string") {
        postgresDate = new Date(postgresDate);
    }

    const formattedDate = `${postgresDate.getFullYear()}-${String(
        postgresDate.getMonth() + 1
    ).padStart(2, "0")}-${String(postgresDate.getDate()).padStart(2, "0")}`;

    return formattedDate;
}

export function isStringNotEmpty(value: string) {
    return value.trim() !== "";
}
