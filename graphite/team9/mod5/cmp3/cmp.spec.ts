
import { Cmp6953Component } from './cmp';
describe('Cmp6953Component', () => {
  it('should add', () => {
    expect(new Cmp6953Component().add6953(1)).toBe(6954);
  });
});