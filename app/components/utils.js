export const logoUrl = "../assets/graphql_logo.png"

export const blurb = 'Graff Exchange, a real-time stock portfolio application built with a full stack: React, Redux, Sass, Socket.io, Node.js, GraphQL, Redis, PostgreSQL, and AWS.'

export function isDesktop(){

    return window.outerWidth > 1100;
}

export function isCell(){

    return window.outerWidth < 601;
}

export function isTab(){

    return !isCell && !isDesktop;
}