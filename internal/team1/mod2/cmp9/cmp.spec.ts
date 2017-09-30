
import { Cmp8129Component } from './cmp';
describe('Cmp8129Component', () => {
  it('should add', () => {
    expect(new Cmp8129Component().add8129(1)).toBe(8130);
  });
});