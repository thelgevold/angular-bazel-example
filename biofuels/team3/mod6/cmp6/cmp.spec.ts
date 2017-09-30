
import { Cmp1366Component } from './cmp';
describe('Cmp1366Component', () => {
  it('should add', () => {
    expect(new Cmp1366Component().add1366(1)).toBe(1367);
  });
});