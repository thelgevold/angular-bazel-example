
import { Cmp8554Component } from './cmp';
describe('Cmp8554Component', () => {
  it('should add', () => {
    expect(new Cmp8554Component().add8554(1)).toBe(8555);
  });
});