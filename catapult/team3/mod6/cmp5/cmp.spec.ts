
import { Cmp2365Component } from './cmp';
describe('Cmp2365Component', () => {
  it('should add', () => {
    expect(new Cmp2365Component().add2365(1)).toBe(2366);
  });
});