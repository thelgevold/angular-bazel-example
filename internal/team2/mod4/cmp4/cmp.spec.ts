
import { Cmp8244Component } from './cmp';
describe('Cmp8244Component', () => {
  it('should add', () => {
    expect(new Cmp8244Component().add8244(1)).toBe(8245);
  });
});