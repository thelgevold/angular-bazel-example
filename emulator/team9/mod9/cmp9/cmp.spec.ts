
import { Cmp4999Component } from './cmp';
describe('Cmp4999Component', () => {
  it('should add', () => {
    expect(new Cmp4999Component().add4999(1)).toBe(5000);
  });
});