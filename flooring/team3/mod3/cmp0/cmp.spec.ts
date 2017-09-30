
import { Cmp5330Component } from './cmp';
describe('Cmp5330Component', () => {
  it('should add', () => {
    expect(new Cmp5330Component().add5330(1)).toBe(5331);
  });
});