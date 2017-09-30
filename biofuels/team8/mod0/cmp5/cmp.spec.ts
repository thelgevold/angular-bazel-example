
import { Cmp1805Component } from './cmp';
describe('Cmp1805Component', () => {
  it('should add', () => {
    expect(new Cmp1805Component().add1805(1)).toBe(1806);
  });
});