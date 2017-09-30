
import { Cmp9330Component } from './cmp';
describe('Cmp9330Component', () => {
  it('should add', () => {
    expect(new Cmp9330Component().add9330(1)).toBe(9331);
  });
});