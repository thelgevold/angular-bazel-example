
import { Cmp8672Component } from './cmp';
describe('Cmp8672Component', () => {
  it('should add', () => {
    expect(new Cmp8672Component().add8672(1)).toBe(8673);
  });
});