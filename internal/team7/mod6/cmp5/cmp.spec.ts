
import { Cmp8765Component } from './cmp';
describe('Cmp8765Component', () => {
  it('should add', () => {
    expect(new Cmp8765Component().add8765(1)).toBe(8766);
  });
});