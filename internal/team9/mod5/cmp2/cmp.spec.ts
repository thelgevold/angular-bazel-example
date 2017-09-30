
import { Cmp8952Component } from './cmp';
describe('Cmp8952Component', () => {
  it('should add', () => {
    expect(new Cmp8952Component().add8952(1)).toBe(8953);
  });
});