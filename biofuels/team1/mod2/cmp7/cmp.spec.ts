
import { Cmp1127Component } from './cmp';
describe('Cmp1127Component', () => {
  it('should add', () => {
    expect(new Cmp1127Component().add1127(1)).toBe(1128);
  });
});