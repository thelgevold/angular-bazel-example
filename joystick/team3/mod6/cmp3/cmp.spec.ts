
import { Cmp9363Component } from './cmp';
describe('Cmp9363Component', () => {
  it('should add', () => {
    expect(new Cmp9363Component().add9363(1)).toBe(9364);
  });
});