
import { Cmp8475Component } from './cmp';
describe('Cmp8475Component', () => {
  it('should add', () => {
    expect(new Cmp8475Component().add8475(1)).toBe(8476);
  });
});