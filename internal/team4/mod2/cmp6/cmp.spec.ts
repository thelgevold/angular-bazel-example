
import { Cmp8426Component } from './cmp';
describe('Cmp8426Component', () => {
  it('should add', () => {
    expect(new Cmp8426Component().add8426(1)).toBe(8427);
  });
});