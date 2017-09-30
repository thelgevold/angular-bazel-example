
import { Cmp1628Component } from './cmp';
describe('Cmp1628Component', () => {
  it('should add', () => {
    expect(new Cmp1628Component().add1628(1)).toBe(1629);
  });
});