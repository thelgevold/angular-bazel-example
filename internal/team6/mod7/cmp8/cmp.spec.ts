
import { Cmp8678Component } from './cmp';
describe('Cmp8678Component', () => {
  it('should add', () => {
    expect(new Cmp8678Component().add8678(1)).toBe(8679);
  });
});