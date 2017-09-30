
import { Cmp6641Component } from './cmp';
describe('Cmp6641Component', () => {
  it('should add', () => {
    expect(new Cmp6641Component().add6641(1)).toBe(6642);
  });
});