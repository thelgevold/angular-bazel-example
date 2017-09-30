
import { Cmp1979Component } from './cmp';
describe('Cmp1979Component', () => {
  it('should add', () => {
    expect(new Cmp1979Component().add1979(1)).toBe(1980);
  });
});