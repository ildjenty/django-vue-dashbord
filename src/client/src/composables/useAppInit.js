import { provide, inject } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const AppInitPathProviderKey = 'AppInitPathProviderKey';
export const entryPath = `${location.pathname}${location.search}${location.hash}`;
export const initialPageResolver = (data, router) => {
  if (data.isAuthenticated) {
    if (entryPath === '/login') {
      router.push('/home');
    } else {
      router.push(entryPath);
    }
  } else {
    router.push('/login');
  }
};

export default () => {
  const { dispatch } = useStore();
  const router = useRouter();

  const provideAppInitPath = () => provide(AppInitPathProviderKey, entryPath);
  const injectAppInitPath = () => inject(AppInitPathProviderKey);
  const resolveInitialPage = async () => {
    dispatch('user/sessionCheck').then((data) => {
      initialPageResolver(data, router);
    });
  };

  return {
    entryPath,
    provideAppInitPath,
    injectAppInitPath,
    resolveInitialPage,
  };
};
