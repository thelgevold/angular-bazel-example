
import { Cmp7115Component } from './cmp';
describe('Cmp7115Component', () => {
  it('should add', () => {
    expect(new Cmp7115Component().add7115(1)).toBe(7116);
  });
});