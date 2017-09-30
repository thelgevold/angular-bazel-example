
import { Cmp8361Component } from './cmp';
describe('Cmp8361Component', () => {
  it('should add', () => {
    expect(new Cmp8361Component().add8361(1)).toBe(8362);
  });
});