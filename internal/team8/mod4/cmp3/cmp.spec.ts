
import { Cmp8843Component } from './cmp';
describe('Cmp8843Component', () => {
  it('should add', () => {
    expect(new Cmp8843Component().add8843(1)).toBe(8844);
  });
});