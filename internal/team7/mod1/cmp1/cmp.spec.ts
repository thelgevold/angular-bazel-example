
import { Cmp8711Component } from './cmp';
describe('Cmp8711Component', () => {
  it('should add', () => {
    expect(new Cmp8711Component().add8711(1)).toBe(8712);
  });
});