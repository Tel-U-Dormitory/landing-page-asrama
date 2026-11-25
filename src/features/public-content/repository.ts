export function visibleContent<T, U>(
  entries: readonly T[],
  isVisible: (entry: T) => boolean,
  toPublic: (entry: T) => U,
): U[] {
  return entries.filter(isVisible).map(toPublic);
}

export function slugRepository<T extends { slug: string }>(list: () => Promise<readonly T[]>) {
  return {
    list,
    async find(slug: string) {
      return (await list()).find((item) => item.slug === slug);
    },
  };
}

export function fixturesEnabled(environment: string, flag?: string) {
  return environment === "development" && flag === "1";
}
