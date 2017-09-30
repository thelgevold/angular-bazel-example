
import { Cmp9325Component } from './cmp';
describe('Cmp9325Component', () => {
  it('should add', () => {
    expect(new Cmp9325Component().add9325(1)).toBe(9326);
  });
});