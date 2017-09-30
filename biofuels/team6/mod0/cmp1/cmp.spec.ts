
import { Cmp1601Component } from './cmp';
describe('Cmp1601Component', () => {
  it('should add', () => {
    expect(new Cmp1601Component().add1601(1)).toBe(1602);
  });
});