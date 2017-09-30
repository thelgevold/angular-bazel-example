
import { Cmp1511Component } from './cmp';
describe('Cmp1511Component', () => {
  it('should add', () => {
    expect(new Cmp1511Component().add1511(1)).toBe(1512);
  });
});