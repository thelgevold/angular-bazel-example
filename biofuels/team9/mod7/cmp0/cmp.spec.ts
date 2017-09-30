
import { Cmp1970Component } from './cmp';
describe('Cmp1970Component', () => {
  it('should add', () => {
    expect(new Cmp1970Component().add1970(1)).toBe(1971);
  });
});