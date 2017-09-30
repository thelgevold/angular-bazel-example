
import { Cmp7013Component } from './cmp';
describe('Cmp7013Component', () => {
  it('should add', () => {
    expect(new Cmp7013Component().add7013(1)).toBe(7014);
  });
});