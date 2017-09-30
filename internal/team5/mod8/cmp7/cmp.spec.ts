
import { Cmp8587Component } from './cmp';
describe('Cmp8587Component', () => {
  it('should add', () => {
    expect(new Cmp8587Component().add8587(1)).toBe(8588);
  });
});