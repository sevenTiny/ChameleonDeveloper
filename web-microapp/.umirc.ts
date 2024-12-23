import { defineConfig } from '@umijs/max';

export default defineConfig({
  hash: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  headScripts: [],
  mfsu: {
    strategy: 'normal',
  },
  layout: {
    title: '@umijs/max',
  },
  qiankun: {
    slave: {
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: false,
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      layout: false,
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
      layout: false,
    },
    {
      name: 'steppage',
      path: '/steppage',
      component: './StepPage',
      layout: false,
    },
    {
      name: 'typographypage',
      path: '/typographypage',
      component: './TypographyPage',
      layout: false,
    },
    {
      name: 'carouselpage',
      path: '/carouselpage',
      component: './CarouselPage',
      layout: false,
    },
    {
      name: 'cascaderpage',
      path: '/cascaderpage',
      component: './CascaderPage',
      layout: false,
    },
    {
      name: 'timelinepage',
      path: '/timelinepage',
      component: './TimelinePage',
      layout: false,
    },
    {
      name: 'countdownpage',
      path: '/countdownpage',
      component: './CountdownPage',
      layout: false,
    }
  ],
  npmClient: 'yarn',
});

