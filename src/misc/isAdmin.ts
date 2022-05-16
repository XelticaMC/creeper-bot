import { Guild } from "discord.js";
import { getAdmins } from "./env";

export function isAdmin(userId: string, guild = null as Guild | null | undefined) {
    return [guild?.ownerId, ...getAdmins()].includes(userId);
}
