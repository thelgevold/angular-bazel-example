
import { Cmp2099Component } from './cmp';
describe('Cmp2099Component', () => {
  it('should add', () => {
    expect(new Cmp2099Component().add2099(1)).toBe(2100);
  });
});