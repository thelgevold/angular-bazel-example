
import { Cmp8402Component } from './cmp';
describe('Cmp8402Component', () => {
  it('should add', () => {
    expect(new Cmp8402Component().add8402(1)).toBe(8403);
  });
});