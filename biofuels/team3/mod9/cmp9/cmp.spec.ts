
import { Cmp1399Component } from './cmp';
describe('Cmp1399Component', () => {
  it('should add', () => {
    expect(new Cmp1399Component().add1399(1)).toBe(1400);
  });
});