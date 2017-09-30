
import { Cmp6349Component } from './cmp';
describe('Cmp6349Component', () => {
  it('should add', () => {
    expect(new Cmp6349Component().add6349(1)).toBe(6350);
  });
});