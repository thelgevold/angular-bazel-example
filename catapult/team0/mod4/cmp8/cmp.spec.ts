
import { Cmp2048Component } from './cmp';
describe('Cmp2048Component', () => {
  it('should add', () => {
    expect(new Cmp2048Component().add2048(1)).toBe(2049);
  });
});