
import { Cmp8139Component } from './cmp';
describe('Cmp8139Component', () => {
  it('should add', () => {
    expect(new Cmp8139Component().add8139(1)).toBe(8140);
  });
});