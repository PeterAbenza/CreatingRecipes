import typeUserLogado from "./allTypes"

type inicialState = {
    dadosLogado: []
}

type actionType = {
    type: string,
    payload: any
}

const userReducer = (state: inicialState, action: actionType) => {
    switch (action.type) {
        case typeUserLogado.typeUserLogado : 
            return
    default : 
        return state;
    }
};

export default userReducer;