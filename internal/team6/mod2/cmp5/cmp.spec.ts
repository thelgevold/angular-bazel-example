
import { Cmp8625Component } from './cmp';
describe('Cmp8625Component', () => {
  it('should add', () => {
    expect(new Cmp8625Component().add8625(1)).toBe(8626);
  });
});