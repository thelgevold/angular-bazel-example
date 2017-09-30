
import { Cmp1365Component } from './cmp';
describe('Cmp1365Component', () => {
  it('should add', () => {
    expect(new Cmp1365Component().add1365(1)).toBe(1366);
  });
});