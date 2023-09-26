import TypesUsers from "./allTypes";

export const logado = (payload: any) => ({
    type: TypesUsers.typeUserLogado,
    payload
});