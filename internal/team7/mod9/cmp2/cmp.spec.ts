
import { Cmp8792Component } from './cmp';
describe('Cmp8792Component', () => {
  it('should add', () => {
    expect(new Cmp8792Component().add8792(1)).toBe(8793);
  });
});