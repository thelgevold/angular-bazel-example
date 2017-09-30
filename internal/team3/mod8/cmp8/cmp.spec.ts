
import { Cmp8388Component } from './cmp';
describe('Cmp8388Component', () => {
  it('should add', () => {
    expect(new Cmp8388Component().add8388(1)).toBe(8389);
  });
});