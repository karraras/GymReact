function Reduce(state, action) {
  if (action.type === "Loading") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "DisPlayData") {
    return {
      ...state,
      data: action.payload,
      loading: false,
    };
  }
  if (action.type === "hDisPlayData") {
    return {
      ...state,
      hData: action.payload,
      loading: false,
    };
  }
  if (action.type === "getTarget") {
    return {
      ...state,
      target: action.payload,
    };
  }
  if (action.type === "DataTarget") {
    return {
      ...state,
      dataT: action.payload,
      loading: false,
    };
  }
  if (action.type === "DataEquip") {
    return {
      ...state,
      dataE: action.payload,
      loading: false,
    };
  }
  if (action.type === "getEquip") {
    return {
      ...state,
      equip: action.payload,
    };
  }
  if (action.type === "getType") {
    return {
      ...state,
      type: action.payload,
    };
  }
  if (action.type === "getName") {
    return {
      ...state,
      name: action.payload,
    };
  }

  return state;
}

export default Reduce;
