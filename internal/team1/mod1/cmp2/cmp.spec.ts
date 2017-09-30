
import { Cmp8112Component } from './cmp';
describe('Cmp8112Component', () => {
  it('should add', () => {
    expect(new Cmp8112Component().add8112(1)).toBe(8113);
  });
});