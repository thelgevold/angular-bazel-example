
import { Cmp1300Component } from './cmp';
describe('Cmp1300Component', () => {
  it('should add', () => {
    expect(new Cmp1300Component().add1300(1)).toBe(1301);
  });
});