import { provide, inject } from 'vue';

const appEntryPathProviderKey = 'appEntryPathProviderKey';
const entryPath = `${location.pathname}${location.search}${location.hash}`;

export const useAppEntryPath = () => {
  const provideAppEntryPath = () => provide(appEntryPathProviderKey, entryPath);
  const injectAppEntryPath = () => inject(appEntryPathProviderKey);

  return {
    entryPath,
    provideAppEntryPath,
    injectAppEntryPath,
  };
};
