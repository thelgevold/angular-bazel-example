
import { Cmp9168Component } from './cmp';
describe('Cmp9168Component', () => {
  it('should add', () => {
    expect(new Cmp9168Component().add9168(1)).toBe(9169);
  });
});