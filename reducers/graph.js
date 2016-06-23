const rand = (max, min, length) => {
  let result = [],
      resultSorted = [];

  if(typeof max !== 'number') return Math.random();
  if(typeof min !== 'number') return Math.floor(Math.random() * ++max);

  if(min > max) min = [max, max = min][0];

  if(!length || typeof length !== 'number') return Math.floor(Math.random() * (max - min + 1)) + min;

  if(length > max - min + 1) throw new RangeError('invalid length.');

  for(let j = 0, random, index; j < length; j++, max--){
      random = Math.floor(Math.random() * (max - min + 1)) + min;

      for(index = j; index && resultSorted[index-1] <= random; index--) random++;

      result.push(random);
      resultSorted.splice(index, 0, random);
  }

  return result;
};

const initialState = {
    labels: rand(5, 0, 4),
    series: [
      rand(200, 0, 4)
    ]
}

export default function update(state = initialState, action) {
  const isEmpty = (object) => {
    return JSON.stringify(object) == "{}";
  };

  if ((typeof (action.payload) !== 'undefined' && !isEmpty(action.payload.query))) {

    const maxHeight = +action.payload.query.maxHeight,
      minHeight = +action.payload.query.minHeight,
      barCount = +action.payload.query.barCount;

    return {
      labels: rand(barCount, 0, barCount),
      series: [
        rand(maxHeight, minHeight, barCount)
      ]
    }
  } else {
    return {
      labels: rand(5, 0, 5),
      series: [
        rand(300, 100, 5)
      ]
    }
  }

  return state
}
