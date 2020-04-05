import { NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { secret } from "./secret";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open("./mydb.sqlite");

    if (req.method === "POST") {
        const person: any = await db.get("SELECT id, email, name, password FROM person WHERE email = ?", [req.body.email]);

        const isSamePassword = await compare(req.body.password, person.password);

        if (isSamePassword) {
            const claims = { sub: person.id, name: person.name, email: person.email };
            const jwt = sign(claims, secret, { expiresIn: "1h" });
            res.json({ authToken: jwt });
        } else {
            res.json({ message: "Ups, something went wrong!" });
        }
    } else {
        res.status(405).json({ message: "We only support POST" });
    }
}