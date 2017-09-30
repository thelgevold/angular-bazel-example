
import { Cmp6382Component } from './cmp';
describe('Cmp6382Component', () => {
  it('should add', () => {
    expect(new Cmp6382Component().add6382(1)).toBe(6383);
  });
});