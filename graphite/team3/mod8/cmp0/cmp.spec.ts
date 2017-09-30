
import { Cmp6380Component } from './cmp';
describe('Cmp6380Component', () => {
  it('should add', () => {
    expect(new Cmp6380Component().add6380(1)).toBe(6381);
  });
});