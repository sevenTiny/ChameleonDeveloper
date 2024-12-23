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
    // demo
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
      component: './Demo/StepPage',
      layout: false,
    },
    {
      name: 'typographypage',
      path: '/typographypage',
      component: './Demo/TypographyPage',
      layout: false,
    },
    {
      name: 'carouselpage',
      path: '/carouselpage',
      component: './Demo/CarouselPage',
      layout: false,
    },
    {
      name: 'cascaderpage',
      path: '/cascaderpage',
      component: './Demo/CascaderPage',
      layout: false,
    },
    {
      name: 'timelinepage',
      path: '/timelinepage',
      component: './Demo/TimelinePage',
      layout: false,
    },
    {
      name: 'countdownpage',
      path: '/countdownpage',
      component: './Demo/CountdownPage',
      layout: false,
    }
  ],
  npmClient: 'yarn',
});

