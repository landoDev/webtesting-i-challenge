module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // return { ...item, enhancement: item.enhancement += 1 };
  const success = {...item}
  // console.log('in fn', success.enhancement)
  return success.enhancement < 20 ? { ...item, enhancement: item.enhancement += 1 } :  {...item};
}

function fail(item) {
  const failure = {...item}
  if(failure.enhancement < 15){
    return { ...item , durability: item.durability -= 5};
  } else if(failure.enhancement >= 16){
    return { ...item , durability: item.durability -= 10, enhancement: item.enhancement -= 1}
  } else {
    return { ...item , durability: item.durability -= 10}
  }
  
}

function repair(item) {
  return {
    ...item,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}
