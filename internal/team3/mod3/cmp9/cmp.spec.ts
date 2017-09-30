
import { Cmp8339Component } from './cmp';
describe('Cmp8339Component', () => {
  it('should add', () => {
    expect(new Cmp8339Component().add8339(1)).toBe(8340);
  });
});