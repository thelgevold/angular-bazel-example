
import { Cmp8598Component } from './cmp';
describe('Cmp8598Component', () => {
  it('should add', () => {
    expect(new Cmp8598Component().add8598(1)).toBe(8599);
  });
});