
import { Cmp8494Component } from './cmp';
describe('Cmp8494Component', () => {
  it('should add', () => {
    expect(new Cmp8494Component().add8494(1)).toBe(8495);
  });
});