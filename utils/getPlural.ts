const getPluralIdx = (choise, pluralList) => {
  const pluralListLength = pluralList.length;

  if (choise === 0) {
    return 0;
  }

  const teen = choise > 10 && choise < 20;
  const endsWithOne = choise % 10 === 1;

  if (pluralListLength < 4) {
    return !teen && endsWithOne ? 1 : 2;
  }
  if (!teen && endsWithOne) {
    return 1;
  }
  if (!teen && choise % 10 >= 2 && choise % 10 <= 4) {
    return 2;
  }

  return pluralListLength < 4 ? 2 : 3;
};

export const getPlural = (choise, pluralList) => {
  const idx = getPluralIdx(choise, pluralList);

  return pluralList[idx];
};
