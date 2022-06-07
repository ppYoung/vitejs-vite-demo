import { shallowMount } from '@vue/test-utils';
import { expect, test } from 'vitest';

import Button from '../src/components/Button';

test('should mount component correctly', () => {
  const wrapper = shallowMount(Button, {
    props: {
      type: 'primary',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render button text correctly', () => {
  const wrapper = shallowMount(Button, {
    slots: {
      default: 'My Button',
    },
  });

  expect(wrapper.text()).toBe('My Button');
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render primary correctly', () => {
  const wrapper = shallowMount(Button, {
    props: {
      type: 'primary',
    },
  });

  expect(wrapper.classes()).includes('bg-blue-500');
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render disabled state correctly', () => {
  const wrapper = shallowMount(Button, {
    props: {
      disabled: true,
    },
  });

  expect(wrapper.classes()).includes('disabled:cursor-not-allowed');
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render loading state correctly', () => {
  const wrapper = shallowMount(Button, {
    props: {
      loading: true,
    },
  });

  expect(wrapper.classes()).includes('disabled:cursor-not-allowed');
  expect(wrapper.find('i').classes()).includes('i-eos-icons:loading');
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit click event correctly', async () => {
  const wrapper = shallowMount(Button, {});

  await wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit loading click event correctly', async () => {
  const wrapper = shallowMount(Button, {
    props: {
      loading: true,
    },
  });

  await wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeUndefined();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit disabled click event correctly', async () => {
  const wrapper = shallowMount(Button, {
    props: {
      disabled: true,
    },
  });

  await wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeUndefined();
  expect(wrapper.html()).toMatchSnapshot();
});
