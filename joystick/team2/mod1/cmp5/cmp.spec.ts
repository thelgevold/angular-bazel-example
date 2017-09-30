
import { Cmp9215Component } from './cmp';
describe('Cmp9215Component', () => {
  it('should add', () => {
    expect(new Cmp9215Component().add9215(1)).toBe(9216);
  });
});