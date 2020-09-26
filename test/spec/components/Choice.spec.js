import { mount } from '@vue/test-utils'
import Choice from '@/components/Choice.vue'

describe('test1', () => {
  const wrapper = mount(Choice)
  it('初期値は0？', () => {
    expect(wrapper.html()).toContain('<span>Round: 0, HungerPoint: 0</span>')
  })
  it('buttonがあるか？', () => {
    expect(wrapper.find('.choice__list1--check')).toEqual({
      selector: '.choice__list1--check',
    })
    expect(wrapper.find('.choice__list2--check')).toEqual({
      selector: '.choice__list2--check',
    })
    expect(wrapper.find('.choice__list1--snack')).toEqual({
      selector: '.choice__list1--snack',
    })
    expect(wrapper.find('.choice__list2--snack')).toEqual({
      selector: '.choice__list2--snack',
    })
    expect(wrapper.find('.choice__list1--tuna')).toEqual({
      selector: '.choice__list1--tuna',
    })
    expect(wrapper.find('.choice__list2--tuna')).toEqual({
      selector: '.choice__list2--tuna',
    })
    expect(wrapper.find('.choice__list1--play')).toEqual({
      selector: '.choice__list1--play',
    })
    expect(wrapper.find('.choice__list2--play')).toEqual({
      selector: '.choice__list2--play',
    })
  })
})

describe('test2', () => {
  const wrapper = mount(Choice)
  const vm = wrapper.vm
  it('しーちゃん、n回遊んだ後に空腹確認', () => {
    const button = wrapper.find('.choice__list1--play')
    const check = wrapper.find('.choice__list1--check')
    expect(vm.hp1).toBe(0)
    for (let i = 0; i < 5; ++i) button.trigger('click')
    expect(vm.hp1).toBe(50)
    check.trigger('click')
    expect(vm.answer1).toBe('まだ大丈夫')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    expect(vm.hp1).toBe(90)
    check.trigger('click')
    expect(vm.answer1).toBe('ハラヘリ')
    button.trigger('click')
    expect(vm.hp1).toBe(100)
    check.trigger('click')
    expect(vm.answer1).toBe('暴れる')
    expect(vm.anger1).toBe(true)
  })
  it('キャンちゃん、n回遊んだ後に空腹確認', () => {
    const button = wrapper.find('.choice__list2--play')
    const check = wrapper.find('.choice__list2--check')
    expect(vm.hp2).toBe(0)
    button.trigger('click')
    button.trigger('click')
    expect(vm.hp2).toBe(40)
    check.trigger('click')
    expect(vm.answer2).toBe('まだ大丈夫')
    button.trigger('click')
    expect(vm.hp2).toBe(60)
    check.trigger('click')
    expect(vm.answer2).toBe('ハラヘリ')
    button.trigger('click')
    button.trigger('click')
    expect(vm.hp2).toBe(100)
    check.trigger('click')
    expect(vm.answer2).toBe('暴れる')
    expect(vm.anger2).toBe(true)
  })
})

describe('test3', () => {
  const wrapper = mount(Choice)
  const vm = wrapper.vm
  it('しーちゃん、n回遊んだ後に餌をあげてHungerPointを計測', () => {
    const button = wrapper.find('.choice__list1--play')
    const snack = wrapper.find('.choice__list1--snack')
    const tuna = wrapper.find('.choice__list1--tuna')
    expect(vm.hp1).toBe(0)
    snack.trigger('click')
    expect(vm.hp1).toBe(0) // HungerPointは非負整数の値。0を下回らない。
    tuna.trigger('click')
    expect(vm.hp1).toBe(0) // HungerPointは非負整数の値。0を下回らない。
    button.trigger('click')
    expect(vm.hp1).toBe(10)
    snack.trigger('click')
    expect(vm.hp1).toBe(0) // HungerPointは非負整数の値。0を下回らない。
    for (let i = 0; i < 10; ++i) button.trigger('click')
    expect(vm.hp1).toBe(100)
    snack.trigger('click')
    expect(vm.hp1).toBe(60)
    for (let i = 0; i < 10; ++i) button.trigger('click')
    expect(vm.hp1).toBe(160)
    tuna.trigger('click')
    expect(vm.hp1).toBe(0)
  })

  it('キャンちゃん、n回遊んだ後に餌をあげてHungerPointを計測', () => {
    const button = wrapper.find('.choice__list2--play')
    const snack = wrapper.find('.choice__list2--snack')
    const tuna = wrapper.find('.choice__list2--tuna')
    expect(vm.hp2).toBe(0)
    snack.trigger('click')
    expect(vm.hp2).toBe(0) // HungerPointは非負整数の値。0を下回らない。
    tuna.trigger('click')
    expect(vm.hp2).toBe(0) // HungerPointは非負整数の値。0を下回らない。
    button.trigger('click')
    expect(vm.hp2).toBe(20)
    snack.trigger('click')
    expect(vm.hp2).toBe(0) // HungerPointは非負整数の値。0を下回らない。
    for (let i = 0; i < 10; ++i) button.trigger('click')
    expect(vm.hp2).toBe(200)
    snack.trigger('click')
    expect(vm.hp2).toBe(160)
    for (let i = 0; i < 10; ++i) button.trigger('click')
    expect(vm.hp2).toBe(360)
    tuna.trigger('click')
    expect(vm.hp2).toBe(0)
  })
})
