
import { Cmp8820Component } from './cmp';
describe('Cmp8820Component', () => {
  it('should add', () => {
    expect(new Cmp8820Component().add8820(1)).toBe(8821);
  });
});