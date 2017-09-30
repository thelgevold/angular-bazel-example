
import { Cmp8107Component } from './cmp';
describe('Cmp8107Component', () => {
  it('should add', () => {
    expect(new Cmp8107Component().add8107(1)).toBe(8108);
  });
});