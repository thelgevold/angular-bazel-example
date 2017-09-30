
import { Cmp8721Component } from './cmp';
describe('Cmp8721Component', () => {
  it('should add', () => {
    expect(new Cmp8721Component().add8721(1)).toBe(8722);
  });
});