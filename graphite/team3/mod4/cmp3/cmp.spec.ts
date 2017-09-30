
import { Cmp6343Component } from './cmp';
describe('Cmp6343Component', () => {
  it('should add', () => {
    expect(new Cmp6343Component().add6343(1)).toBe(6344);
  });
});