
import { Cmp7305Component } from './cmp';
describe('Cmp7305Component', () => {
  it('should add', () => {
    expect(new Cmp7305Component().add7305(1)).toBe(7306);
  });
});