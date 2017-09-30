
import { Cmp7104Component } from './cmp';
describe('Cmp7104Component', () => {
  it('should add', () => {
    expect(new Cmp7104Component().add7104(1)).toBe(7105);
  });
});