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
  return { ...item };
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
