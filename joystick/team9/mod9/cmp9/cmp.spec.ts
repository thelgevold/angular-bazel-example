
import { Cmp9999Component } from './cmp';
describe('Cmp9999Component', () => {
  it('should add', () => {
    expect(new Cmp9999Component().add9999(1)).toBe(10000);
  });
});