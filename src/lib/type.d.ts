export type TranslationType = {
    "id": string;
    "idkata": string | null;
    "lpgkata": string | null;
    "lpgaksara": string | null;
    "lpgdialek": string | null;
}

export type ParamsType = {
    text: string;
    lang: "id" | "lpg";
};

export type TranslationResponseType = {
    message: string;
    data: TranslationType[];
};