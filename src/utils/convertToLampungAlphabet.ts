import { regexa, regexah, regexahx, regexai, regexaix, regexan, regexang, regexangx, regexanx, regexar, regexarx, regexau, regexaux, regexawal, regexgh, regexng, regexny, regextandabaca, regexvocal, regexx, regexxawal } from "@/lib/regex";

export const convertToLampungAlphabet = (word: string) => {
    let lpgAlp = word;

    lpgAlp = lpgAlp.replace(regexng, (a) => 'G' + (a[2] ?? ''));
    lpgAlp = lpgAlp.replace(regexny, (a) => 'Y' + (a[2] ?? ''));
    lpgAlp = lpgAlp.replace(regexgh, (a) => 'H' + (a[2] ?? ''));

    lpgAlp = lpgAlp.replace(regexang, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'X' + (a[2] ?? ''));
    lpgAlp = lpgAlp.replace(regexan, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'N' + (a[2] ?? ''));
    lpgAlp = lpgAlp.replace(regexah, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'A' + (a[2] ?? ''));
    lpgAlp = lpgAlp.replace(regexar, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'R' + (a[2] ?? ''));
    lpgAlp = lpgAlp.replace(regexai, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'I' + (a[2] ?? ''));
    lpgAlp = lpgAlp.replace(regexau, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'U' + (a[2] ?? ''));

    lpgAlp = lpgAlp.replace(regexxawal, (a) => a[0] + a[1] + "x" + a[2] + a[3]);
    lpgAlp = lpgAlp.replace(regexx, (a) => (a.search(regextandabaca) !== -1 ? a.substring(0, a.length - 1) + "x" + a.substring(a.length - 1) : a + "x"));

    lpgAlp = lpgAlp.replace(regexangx, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'X');
    lpgAlp = lpgAlp.replace(regexanx, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'N');
    lpgAlp = lpgAlp.replace(regexahx, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'A');
    lpgAlp = lpgAlp.replace(regexarx, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'R');
    lpgAlp = lpgAlp.replace(regexaix, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'I');
    lpgAlp = lpgAlp.replace(regexaux, (a) => (a[0].search(regexvocal) !== -1 ? a[0] : '') + 'U');

    lpgAlp = lpgAlp.replace(regexa, (a) => a[0] + (a[2] ?? ''));
    lpgAlp = lpgAlp.replace(regexawal, (a) => "a" + a);

    return lpgAlp;
};
