
import { Cmp9365Component } from './cmp';
describe('Cmp9365Component', () => {
  it('should add', () => {
    expect(new Cmp9365Component().add9365(1)).toBe(9366);
  });
});