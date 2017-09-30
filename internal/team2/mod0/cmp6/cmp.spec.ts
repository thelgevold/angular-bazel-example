
import { Cmp8206Component } from './cmp';
describe('Cmp8206Component', () => {
  it('should add', () => {
    expect(new Cmp8206Component().add8206(1)).toBe(8207);
  });
});