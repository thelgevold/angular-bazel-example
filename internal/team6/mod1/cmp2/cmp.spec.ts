
import { Cmp8612Component } from './cmp';
describe('Cmp8612Component', () => {
  it('should add', () => {
    expect(new Cmp8612Component().add8612(1)).toBe(8613);
  });
});