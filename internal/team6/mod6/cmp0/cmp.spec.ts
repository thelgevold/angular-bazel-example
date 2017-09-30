
import { Cmp8660Component } from './cmp';
describe('Cmp8660Component', () => {
  it('should add', () => {
    expect(new Cmp8660Component().add8660(1)).toBe(8661);
  });
});