
import { Cmp1330Component } from './cmp';
describe('Cmp1330Component', () => {
  it('should add', () => {
    expect(new Cmp1330Component().add1330(1)).toBe(1331);
  });
});