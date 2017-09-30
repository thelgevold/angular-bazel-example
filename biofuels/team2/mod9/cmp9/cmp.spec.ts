
import { Cmp1299Component } from './cmp';
describe('Cmp1299Component', () => {
  it('should add', () => {
    expect(new Cmp1299Component().add1299(1)).toBe(1300);
  });
});