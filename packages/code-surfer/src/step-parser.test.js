import mapStep from "./step-parser";

test("map lines", () => {
  const steps = [{ lines: [1, 3] }, { lines: [5], note: "foo" }];
  const expected = [{ 1: null, 3: null }, { 5: null }];

  const tokenSteps = steps.map(mapStep);
  expect(tokenSteps).toEqual(expected);
});

test("map range", () => {
  const steps = [{ range: [1, 3] }, { range: [1, 1], note: "foo" }];
  const expected = [{ 1: null, 2: null, 3: null }, { 1: null }];

  const tokenSteps = steps.map(mapStep);
  expect(tokenSteps).toEqual(expected);
});

test("map ranges", () => {
  const steps = [{ ranges: [[1, 2], [5, 5]] }];
  const expected = [{ 1: null, 2: null, 5: null }];

  const tokenSteps = steps.map(mapStep);
  expect(tokenSteps).toEqual(expected);
});

test("map tokens", () => {
  const steps = [{ tokens: { 1: [1, 2], 2: null, 5: null } }];
  const expected = [{ 1: [1, 2], 2: null, 5: null }];

  const tokenSteps = steps.map(mapStep);
  expect(tokenSteps).toEqual(expected);
});

test("map range, ranges and tokens", () => {
  const steps = [
    { tokens: { 1: null }, range: [3, 4], ranges: [[6, 6], [8, 8]] }
  ];
  const expected = [{ 1: null, 3: null, 4: null, 6: null, 8: null }];

  const tokenSteps = steps.map(mapStep);
  expect(tokenSteps).toEqual(expected);
});
