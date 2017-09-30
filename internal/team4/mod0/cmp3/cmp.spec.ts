
import { Cmp8403Component } from './cmp';
describe('Cmp8403Component', () => {
  it('should add', () => {
    expect(new Cmp8403Component().add8403(1)).toBe(8404);
  });
});