export function pick<T extends object, K extends keyof T>(object:T, keys:readonly K[]): Pick<T,K>;
export function omit<T extends object, K extends keyof T>(object:T, keys:readonly K[]): Omit<T,K>;
