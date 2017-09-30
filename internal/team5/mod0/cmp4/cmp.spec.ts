
import { Cmp8504Component } from './cmp';
describe('Cmp8504Component', () => {
  it('should add', () => {
    expect(new Cmp8504Component().add8504(1)).toBe(8505);
  });
});