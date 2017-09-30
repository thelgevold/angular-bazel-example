
import { Cmp9104Component } from './cmp';
describe('Cmp9104Component', () => {
  it('should add', () => {
    expect(new Cmp9104Component().add9104(1)).toBe(9105);
  });
});