
import { Cmp8182Component } from './cmp';
describe('Cmp8182Component', () => {
  it('should add', () => {
    expect(new Cmp8182Component().add8182(1)).toBe(8183);
  });
});