type TranslationType = {
    "id": string;
    "idkata": string | null;
    "lpgkata": string | null;
    "lpgaksara": string | null;
    "lpgdialek": string | null;
}

type ParamsType = {
    text: string;
    lang: "id" | "lpg";
};

type TranslationResponseType = {
    message: string;
    data: TranslationType[];
};