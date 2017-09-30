
import { Cmp7168Component } from './cmp';
describe('Cmp7168Component', () => {
  it('should add', () => {
    expect(new Cmp7168Component().add7168(1)).toBe(7169);
  });
});