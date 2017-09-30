
import { Cmp8793Component } from './cmp';
describe('Cmp8793Component', () => {
  it('should add', () => {
    expect(new Cmp8793Component().add8793(1)).toBe(8794);
  });
});