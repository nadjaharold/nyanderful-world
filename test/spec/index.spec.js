import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'
import Choice from '@/components/Choice.vue'

describe('test1', () => {
  const wrapper = mount(Index)
  it('Choiceコンポーネントを読み込めているか', () => {
    const existChoice = wrapper.findComponent(Choice)
    expect(existChoice.exists()).toBe(true)
  })
})
