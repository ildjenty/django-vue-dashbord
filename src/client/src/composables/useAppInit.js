import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const appInitPath = `${location.pathname}${location.search}${location.hash}`;
export const initialPageResolver = (data, router) => {
  if (data.isAuthenticated) {
    if (appInitPath === '/login') {
      router.push('/home');
    } else {
      router.push(appInitPath);
    }
  } else {
    router.push('/login');
  }
};

export default () => {
  const { dispatch } = useStore();
  const router = useRouter();

  const resolveInitialPage = async () => {
    dispatch('user/sessionCheck').then((data) => {
      initialPageResolver(data, router);
    });
  };

  return {
    appInitPath,
    resolveInitialPage,
  };
};
