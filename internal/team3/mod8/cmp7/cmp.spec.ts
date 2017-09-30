
import { Cmp8387Component } from './cmp';
describe('Cmp8387Component', () => {
  it('should add', () => {
    expect(new Cmp8387Component().add8387(1)).toBe(8388);
  });
});