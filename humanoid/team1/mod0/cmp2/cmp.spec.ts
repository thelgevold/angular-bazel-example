
import { Cmp7102Component } from './cmp';
describe('Cmp7102Component', () => {
  it('should add', () => {
    expect(new Cmp7102Component().add7102(1)).toBe(7103);
  });
});