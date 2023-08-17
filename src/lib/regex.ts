// Regex Lampung Alphabet

// Consonant
export const regexng = /(ng)[aiueoAIUEO]/g;
export const regexny = /(ny)[aiueoAIUEOkKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHh]/g;
export const regexgh = /(gh)[aiueoAIUEOkKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHh]/g;

// Vocal
export const regexvocal = /^[iIuUeEoO]/;

export const regexang = /[aiueoIUEO](ng)[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
export const regexan = /[aiueoIUEO]n[kKQqpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
export const regexah = /[aiueoIUEO]h[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
export const regexar = /[aiueoIUEO]r[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
export const regexai = /[aiueoIUEO]i[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;
export const regexau = /[aiueoIUEO]u[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/g;

export const regextandabaca = /[\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]/;
export const regexxawal = /[aiueoIUEO][kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWH][kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWH][aiueoIUEO]/g;
export const regexx = /[aiueoIUEO]([kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWHnhriu]|ng)[\,\!\@\.\*\+\?\$\^\/\\\;\:\'\"\[\]\{\}\(\)\%\#\$\^\-\+\=\_]?$/g;

export const regexangx = /[aiueoIUEO]ngx/g;
export const regexanx = /[aiueoIUEO]nx/g;
export const regexahx = /[aiueoIUEO]hx/g;
export const regexarx = /[aiueoIUEO]rx/g;
export const regexaix = /[aiueoIUEO]ix/g;
export const regexaux = /[aiueoIUEO]ux/g;

export const regexa = /[kKQqgpPfFvVbBmMtTdDcCjJzZyYlLsSwWGHhnr][a]/g;

export const regexawal = /^[iIuUeEoOXNAR]/g; 