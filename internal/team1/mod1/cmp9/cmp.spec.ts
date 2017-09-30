
import { Cmp8119Component } from './cmp';
describe('Cmp8119Component', () => {
  it('should add', () => {
    expect(new Cmp8119Component().add8119(1)).toBe(8120);
  });
});