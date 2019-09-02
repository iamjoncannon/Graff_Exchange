export const logoUrl = "https://cdn.freebiesupply.com/logos/large/2x/gopher-logo-png-transparent.png"

export function isDesktop(){

    return window.outerWidth > 1100;
}

export function isCell(){

    return window.outerWidth < 601;
}