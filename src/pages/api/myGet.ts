import { NextPageContext } from "next";
import Router from "next/router";
import fetch from "isomorphic-unfetch";

export async function myGet(url: string, ctx: NextPageContext) {
    // Cookies to server side / Non server side
    const cookie = ctx.req?.headers.cookie;
    const resp = await fetch(url, {
        headers: {
            cookie: cookie!
        }
    });

    // Server side redirect
    if (resp.status === 401 && !ctx.req) {
        Router.replace("/login");
    }

    // Non server side redirect
    if (resp.status === 401 && ctx.req) {
        ctx.res?.writeHead(302, {
            Location: "http://localhost:3000/login"
        });

        ctx.res?.end();
    }

    const json = await resp.json();

    return { json };
}