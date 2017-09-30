
import { Cmp7881Component } from './cmp';
describe('Cmp7881Component', () => {
  it('should add', () => {
    expect(new Cmp7881Component().add7881(1)).toBe(7882);
  });
});