
import { Cmp8043Component } from './cmp';
describe('Cmp8043Component', () => {
  it('should add', () => {
    expect(new Cmp8043Component().add8043(1)).toBe(8044);
  });
});